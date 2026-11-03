"use client";

import { useState, useSyncExternalStore } from "react";

function createPreferenceStore<T extends string>(key: string, fallback: T, allowed: readonly T[]) {
  let value: T | undefined;
  const listeners = new Set<() => void>();

  return {
    getSnapshot: () => {
      if (value !== undefined) return value;
      value = fallback;
      try {
        const stored = localStorage.getItem(key);
        if (allowed.includes(stored as T)) value = stored as T;
      } catch {
        // Privacy settings may block storage; the current visit still works.
      }
      return value;
    },
    getServerSnapshot: () => fallback,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => { listeners.delete(listener); };
    },
    set: (next: T) => {
      value = next;
      try { localStorage.setItem(key, next); } catch { /* Keep the in-memory choice. */ }
      listeners.forEach((listener) => listener());
    },
  };
}

// Per-mounted-owner stores avoid shared state between SSR requests and tests.
export function usePreference<T extends string>(key: string, fallback: T, allowed: readonly T[]) {
  const [store] = useState(() => createPreferenceStore(key, fallback, allowed));
  const value = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
  return [value, store.set] as const;
}

import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return <Portfolio year={new Date().getFullYear()} />;
}

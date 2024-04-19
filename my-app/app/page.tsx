import Header from "@/components/Header";
import Space from "@/components/Space";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className={`max-w-[1600px] m-auto ${font.className}`}>
      <Header />
      <Space/>
    </main>
  );
}

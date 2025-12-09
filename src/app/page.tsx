import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SplineBackground } from "@/components/SplineBackground";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-neutral-900">
      <div className="relative bg-transparent !important">
        <SplineBackground />
        <Header />
        <Hero />
      </div>
      <Work />
      <Stack />
      <About />
      <Contact />
    </div>
  );
}

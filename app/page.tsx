import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import RoadMap from "@/app/components/RoadMap";
import Image from "next/image";

export default function Home() {
  return (
   <main className="container mx-auto">
    <Hero/>
    <About/>
    <RoadMap/>
   </main>
  );
}

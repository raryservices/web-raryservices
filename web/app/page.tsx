import Navbar from "@/src/presentation/layout/Navbar";
import Hero from "@/src/presentation/layout/sections/Home/HeroSection";
import { Logo } from "@/src/presentation/shared/Logo";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
}

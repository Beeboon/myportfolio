import Hero from "@/components/Hero";
import FloatingNavBar from "@/components/FloatingNavBar";
import { Passions } from "@/components/Passions";
import WaveAnim from "@/components/WaveAnimation";



export default function App() {
  return (
    <>
      <FloatingNavBar />
      <WaveAnim src="/Wave.png" alt="beautiful vector wave" />
      <div id="hero">
        <Hero />
      </div>
      <div id="passions">
        <Passions />
      </div>
    </>
  );
}

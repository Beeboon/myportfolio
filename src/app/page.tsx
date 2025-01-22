import Hero from "@/components/Hero";
import FloatingNavBar from "@/components/FloatingNavBar";
import { Passions } from "@/components/Passions";
import WaveBg from "@/components/WaveBg";



export default function App() {
  return (
    <>
      <FloatingNavBar />
      <WaveBg />
      <div id="hero">
        <Hero />
      </div>
      <div id="passions">
        <Passions />
      </div>
      {/* <BackgroundBeams className="" /> */}
    </>
  );
}

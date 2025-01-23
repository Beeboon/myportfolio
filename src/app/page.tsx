import Hero from "@/components/Hero";
import FloatingNavBar from "@/components/FloatingNavBar";
import { Passions } from "@/components/Passions";
import WaveAnim from "@/components/WaveAnimation";
import Projects from "@/components/Projects";



export default function App() {
  return (
    <>
      <FloatingNavBar />
      <WaveAnim src="/Wave.png" alt="beautiful vector wave" />

      <div id="home">
        <Hero />
      </div>

      <div
        id="body"

      >
        <div id="passions">
          <Passions />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </div>
    </>
  );
}

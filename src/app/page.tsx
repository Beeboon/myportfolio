import Hero from "@/components/Hero";
import FloatingNavBar from "@/components/FloatingNavBar";
import { Passions } from "@/components/Passions";
import WaveAnim from "@/components/WaveAnimation";
import Projects from "@/components/Projects";
import WhoAmI from "@/components/WhoAmI";
import Works from "@/components/Works";
import Footer from "@/components/Footer";



export default function App() {
  return (
    <>
      <FloatingNavBar />
      <WaveAnim src="/Wave.webp" alt="Beautiful wave" />

      <div id="home">
        <Hero />
      </div>

      <div
        id="body"
      >
        <div id="whoami">
          <WhoAmI />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="works">
          <Works />
        </div>

        <div id="passions">
          <Passions />
        </div>

        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}

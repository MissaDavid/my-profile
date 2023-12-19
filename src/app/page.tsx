import Intro from "src/components/intro";
import About from "src/components/about";
import Skills from "src/components/skills";
import Contact from "src/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-y-16">
      <Intro />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

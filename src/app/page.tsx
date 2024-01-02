import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Divider from "@/components/divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-y-16">
      <Intro />
      <Divider />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

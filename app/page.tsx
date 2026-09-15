import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <main className="bg-black min-h-svh overflow-hidden">
      <Intro />
      <Hero />
    </main>
  );
}

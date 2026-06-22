import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Curriculum } from "@/components/portfolio/Curriculum";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Documents } from "@/components/portfolio/Documents";
import { Certifications } from "@/components/portfolio/Certifications";
import { Events } from "@/components/portfolio/Events";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => [
    { title: "Laís Zanardi Inocêncio — Desenvolvimento de Software" },
    {
      name: "description",
      content:
        "Portfolio acadêmico de Laís Zanardi Inocêncio — estudante de Desenvolvimento de Software Multiplataforma na Fatec SJC e estagiária na Ericsson.",
    },
    { property: "og:title", content: "Laís Zanardi Inocêncio — Desenvolvimento de Software Multiplataforma" },
    {
      property: "og:description",
      content: "Projetos acadêmicos, pesquisa e habilidades técnicas.",
    },
  ],
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-neutral-200">
      <div className="pointer-events-none fixed inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none fixed inset-0 noise opacity-[0.035]" />
      <Nav />
      <Hero />
      <About />
      <Curriculum />
      <Projects />
      <Skills />
      <Documents />
      <Certifications />
      <Events />
      <Contact />
    </main>
  );
}

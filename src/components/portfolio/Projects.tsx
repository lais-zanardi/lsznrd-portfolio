import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { t } = useI18n();
  const projects = [
    {
      key: "p1",
      img: p1,
      name: "Portfólio Dinâmico",
      tag: "Web App",
      tech: ["Node.js", "Sequelize", "EJS", "JavaScript", "CSS"],
      repo: "github.com/laiszanardi/portfolio-dinamico",
    },
  ];

  return (
    <section id="projetos" className="relative border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
              {t("projects.tag")}
            </span>
            <h2 className="font-display text-4xl font-black italic tracking-tight md:text-6xl">
              {t("projects.title")}
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            {t("projects.featured")}
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative liquid-glass flex flex-col overflow-hidden border border-white/10 p-3"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-900">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 noise opacity-15" />
                <span className="absolute left-3 top-3 border border-white/20 bg-black/50 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-pink backdrop-blur">
                  {p.tag}
                </span>
                <span className="absolute right-3 top-3 border border-white/20 bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-200 backdrop-blur">
                  {t(`projects.${p.key}.context`)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4 pb-2">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-neutral-500 transition-all group-hover:rotate-12 group-hover:text-brand-pink" />
                </div>
                <p className="mb-5 text-sm leading-relaxed text-neutral-300">
                  {t(`projects.${p.key}.desc`)}
                </p>

                <div className="mb-5 space-y-3 text-sm leading-relaxed text-neutral-400">
                  {(["problem", "solution", "challenges", "results"] as const).map((field) => (
                    <div key={field}>
                      <div className="mb-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-pink">
                        {t(`projects.label.${field}`)}
                      </div>
                      <p>{t(`projects.${p.key}.${field}`)}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-5">
                  <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                    {t("projects.label.tech")}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                  <a
                    href={`https://${p.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-pink hover:text-brand-red"
                  >
                    <Github className="size-3.5" />
                    {t("projects.view")}
                  </a>
                  <span className="ml-auto truncate font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    {p.repo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
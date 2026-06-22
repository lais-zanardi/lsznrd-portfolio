import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { t } = useI18n();
  const hardGroups = [
    { labelKey: "skills.group.languages", items: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "EJS", level: 85 },
      { name: "Typescript", level: 82 },
    ]},
    { labelKey: "skills.group.frameworks", items: [
      { name: "Node.js", level: 88 },
      { name: "Java + Spring Boot", level: 85 },
      { name: "Express", level: 82 },
      { name: "RabbitMQ", level: 84 },
      { name: "Docker", level: 79 },
    ]},
    { labelKey: "skills.group.databases", items: [
      { name: "MySQL / PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ]},
    { labelKey: "skills.group.tools", items: [
      { name: "GitHub", level: 92 },
      { name: "Jira", level: 85 },
      { name: "Google AI Pro", level: 88 },
    ]},
  ];

  const softSkills = [
    "teamwork",
    "organization",
    "problem",
    "communication",
    "critical",
    "learning",
  ] as const;

  return (
    <section id="skills" className="relative border-t border-white/5 bg-neutral-950/40 px-6 py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
            {t("skills.tag")}
          </span>
          <h2 className="font-display text-4xl font-black italic tracking-tight md:text-6xl">
            {t("skills.title")}
          </h2>
        </div>

        <div className="mb-12 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
          <span className="text-brand-pink">[01]</span> {t("skills.hard")}
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {hardGroups.map((g, gi) => (
            <motion.div
              key={g.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-colors hover:border-brand-pink/30"
            >
              <div className="mb-6 flex items-center gap-2">
                <span className="size-1.5 bg-brand-red" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300">
                  {t(g.labelKey)}
                </span>
              </div>
              <div className="space-y-5">
                {g.items.map((it, i) => (
                  <div key={it.name}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-neutral-200">{it.name}</span>
                      <span className="font-mono text-neutral-500">{it.level}</span>
                    </div>
                    <div className="h-px w-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="h-px bg-gradient-to-r from-brand-red to-brand-pink shadow-[0_0_8px_var(--brand-pink)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 mb-8 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
          <span className="text-brand-pink">[02]</span> {t("skills.soft")}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-pink/40 hover:bg-white/[0.05]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="size-1.5 bg-brand-pink" />
                <h4 className="font-display text-base font-bold text-neutral-100">
                  {t(`skills.soft.${k}`)}
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                {t(`skills.soft.${k}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
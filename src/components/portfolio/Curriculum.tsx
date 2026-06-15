import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const academic = [
  {
    title: "Desenvolvimento de Software",
    institution: "Fatec São José dos Campos",
    period: "2025 — Atual",
    inProgress: true,
  },
];

const courses = [
  { title: "Estágio em Desenvolvimento", institution: "Ericsson", period: "2025 — Atual" },
  { title: "Engajamento Profissional", institution: "Veduca, Gupy e LinkedIn", period: "2024 — 2025" },
];

const featuredCerts = [
  { title: "Versionamento com GitHub", institution: "Fatec / Online", period: "2025" },
  { title: "Metodologias Ágeis (Jira)", institution: "Ericsson", period: "2025" },
  { title: "Node.js & Backend", institution: "Digital Innovation One", period: "2024" },
];

function List({
  icon: Icon,
  label,
  items,
  inProgressLabel,
}: {
  icon: typeof GraduationCap;
  label: string;
  items: Array<{ title: string; institution: string; period: string; inProgress?: boolean }>;
  inProgressLabel: string;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-8 place-items-center border border-white/10 bg-white/5">
          <Icon className="size-4 text-brand-pink" />
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300">
          {label}
        </span>
      </div>
      <ul className="space-y-5">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="border-l border-white/10 pl-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-display text-base font-bold text-neutral-100">
                {it.title}
              </h4>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                {it.period}
              </span>
            </div>
            <div className="mt-1 font-mono text-xs text-brand-pink">
              {it.institution}
              {it.inProgress ? (
                <span className="ml-2 border border-brand-pink/30 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-brand-pink">
                  {inProgressLabel}
                </span>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function Curriculum() {
  const { t } = useI18n();
  return (
    <section id="curriculo" className="relative border-t border-white/5 bg-neutral-950/40 px-6 py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
            {t("cv.tag")}
          </span>
          <h2 className="font-display text-4xl font-black italic tracking-tight md:text-6xl">
            {t("cv.title")}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <List icon={GraduationCap} label={t("cv.section.academic")} items={academic} inProgressLabel={t("cv.inProgress")} />
          <List icon={BookOpen} label={t("cv.section.courses")} items={courses} inProgressLabel={t("cv.inProgress")} />
          <List icon={Award} label={t("cv.section.certs")} items={featuredCerts} inProgressLabel={t("cv.inProgress")} />
        </div>
      </div>
    </section>
  );
}
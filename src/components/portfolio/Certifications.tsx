import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const certs = [
  { name: "Node.js Developer", institution: "Digital Innovation One", year: "2024", code: "DIO-NODE" },
  { name: "Git & GitHub Experience", institution: "Fatec SJC", year: "2025", code: "GITHUB-EXP" },
  { name: "SQL & Relational Databases", institution: "Fatec SJC", year: "2025", code: "SQL-DB" },
];

export function Certifications() {
  const { t } = useI18n();
  return (
    <section
      id="certificados"
      className="relative border-t border-white/5 bg-neutral-950/40 px-6 py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
            {t("certs.tag")}
          </span>
          <h2 className="font-display text-4xl font-black italic tracking-tight md:text-6xl">
            {t("certs.title")}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-colors hover:border-brand-pink/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand-red/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid size-10 place-items-center border border-brand-pink/40 bg-black/40 text-brand-pink">
                  <ShieldCheck className="size-4" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {c.year}
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold leading-snug text-neutral-100">
                {c.name}
              </h3>
              <div className="relative mt-1 font-mono text-xs text-brand-pink">
                {c.institution}
              </div>
              <div className="relative mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                  ID · {c.code}
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-pink hover:text-brand-red"
                >
                  {t("certs.view")}
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
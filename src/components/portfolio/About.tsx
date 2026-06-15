import { motion } from "framer-motion";
import portrait from "@/assets/portrait.png";
import { useI18n } from "@/lib/i18n";

const areas = [
  "Desenvolvimento Web",
  "Backend (Node.js)",
  "Frontend (HTML/CSS/JS)",
  "Banco de Dados (Sequelize)",
  "Gestão de Repositórios",
  "Metodologias Ágeis",
];

export function About() {
  const { t } = useI18n();
  return (
    <section id="intro" className="relative border-t border-white/5 px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-brand-red/30 via-transparent to-brand-pink/20 blur-2xl" />
            <div className="relative overflow-hidden border border-white/10 bg-neutral-900">
              <img
                src={portrait}
                alt="Laís Zanardi Inocêncio"
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale-[40%] transition-all duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 noise opacity-20" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-brand-red px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
              EST · 2026
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center lg:col-span-7"
        >
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
            {t("intro.tag")}
          </span>
          <h2 className="mb-8 font-display text-4xl font-black italic leading-[0.95] tracking-tight text-balance md:text-6xl">
            {t("intro.title")}
          </h2>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            {t("intro.desc")}
          </p>

          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
            {(["course", "institution", "period", "status"] as const).map((k) => (
              <div key={k}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  {t(`intro.info.${k}`)}
                </div>
                <div className="mt-1 font-display text-lg font-bold text-neutral-100">
                  {t(`intro.info.${k}.value`)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-pink">
                {t("intro.goals.academic.title")}
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                {t("intro.goals.academic.desc")}
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-pink">
                {t("intro.goals.professional.title")}
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                {t("intro.goals.professional.desc")}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
              {t("intro.areas.title")}
            </span>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-neutral-300 transition-colors hover:border-brand-pink/50 hover:text-brand-pink"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
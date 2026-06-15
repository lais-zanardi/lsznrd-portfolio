import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-32 pt-44 md:pt-52"
    >
      {/* Ambient lights */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-red/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-brand-pink/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-3"
        >
          <div className="h-px w-10 bg-brand-red" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
            {t("hero.tag")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-6xl font-black italic leading-[0.88] tracking-tighter md:text-8xl lg:text-9xl"
        >
          {t("hero.title.part1")}{" "}
          <span
            data-text={t("hero.title.future")}
            className="glitch bg-gradient-to-r from-brand-red to-brand-pink bg-clip-text text-transparent"
          >
            {t("hero.title.future")}
          </span>{" "}
          {t("hero.title.part2")}
        </motion.h1>

        <div className="mt-12 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-md text-lg font-medium leading-relaxed text-neutral-400 md:text-xl"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 bg-brand-pink px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black shadow-[5px_5px_0px_0px_var(--brand-red)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_var(--brand-red)]"
            >
              {t("hero.cta.projects")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition-colors hover:border-brand-pink/50 hover:bg-white/10"
            >
              <Mail className="size-4" />
              {t("hero.cta.contact")}
            </a>
          </motion.div>
        </div>

        {/* Decorative ghost text */}
        <div className="pointer-events-none absolute -right-12 top-24 select-none font-display text-[16rem] font-black italic leading-none text-white/[0.025] md:text-[22rem]">
          FLOW
        </div>
      </div>

      {/* Bottom meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 mx-auto mt-32 grid max-w-7xl grid-cols-2 gap-6 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 md:grid-cols-4"
      >
        <div><span className="text-brand-pink">[01]</span> Latency · 14ms</div>
        <div><span className="text-brand-pink">[02]</span> {t("hero.meta.status.label")} · {t("hero.meta.status.value")}</div>
        <div><span className="text-brand-pink">[03]</span> {t("hero.meta.region.label")} · {t("hero.meta.region.value")}</div>
        <div><span className="text-brand-pink">[04]</span> v4.0 · 2026</div>
      </motion.div>
    </section>
  );
}
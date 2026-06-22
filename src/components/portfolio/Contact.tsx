import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/5 px-6 py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[400px] w-[700px] rounded-full bg-brand-red/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 noise opacity-[0.04]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <span className="mb-6 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
          {t("contact.tag")}
        </span>
        <h2 className="text-balance font-display text-5xl font-black italic leading-[0.95] tracking-tighter md:text-8xl">
          {t("contact.title.part1")}{" "}
          <span
            data-text={t("contact.title.highlight")}
            className="glitch bg-gradient-to-r from-brand-red to-brand-pink bg-clip-text text-transparent"
          >
            {t("contact.title.highlight")}
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-neutral-400">
          {t("contact.desc")}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:zanardilais@gmail.com"
            className="group inline-flex items-center gap-2 bg-brand-pink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[5px_5px_0px_0px_var(--brand-red)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_var(--brand-red)]"
          >
            {t("contact.cta")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:zanardilais@gmail.com"
            className="font-display text-lg italic text-neutral-300 underline decoration-white/20 underline-offset-8 transition-colors hover:text-brand-pink"
          >
            lais.inocencio@aluno.cps.sp.gov.br
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-3">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/lais-zanardi-inocencio/", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com/lais-zanardi", label: "GitHub" },
            { Icon: Mail, href: "mailto:zanardilais@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="group grid size-12 place-items-center border border-white/10 bg-white/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-pink/50 hover:bg-brand-pink/10"
            >
              <Icon className="size-4 text-neutral-400 transition-colors group-hover:text-brand-pink" />
            </a>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto mt-32 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 md:flex-row">
        <div>{t("contact.footer")}</div>
        <div className="flex gap-6">
          <span>linkedin/laiszanardi</span>
          <span>github/laiszanardi</span>
          <span>{t("contact.status")}</span>
        </div>
      </div>
    </section>
  );
}
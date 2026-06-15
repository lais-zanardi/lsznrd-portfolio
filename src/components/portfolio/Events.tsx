import { motion } from "framer-motion";
import { Trophy, Code2, Mic, Users, Cpu, Presentation } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const events = [
  { key: "e1", typeKey: "events.type.lecture", year: "2025", icon: Trophy, location: "Fatec SJC" },
  { key: "e2", typeKey: "events.type.fair", year: "2025", icon: Code2, location: "Google Cloud" },
];

export function Events() {
  const { t } = useI18n();
  return (
    <section id="eventos" className="relative border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
            {t("events.tag")}
          </span>
          <h2 className="font-display text-4xl font-black italic tracking-tight md:text-6xl">
            {t("events.title")}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.article
                key={e.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-start gap-5 border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-pink/40 hover:bg-white/[0.06]"
              >
                <span className="grid size-11 shrink-0 place-items-center border border-white/10 bg-black/40 text-brand-pink transition-colors group-hover:border-brand-pink/40">
                  <Icon className="size-4" />
                </span>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em]">
                    <span className="text-brand-pink">{t(e.typeKey)}</span>
                    <span className="text-neutral-500">· {e.year} · {e.location}</span>
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-neutral-100">
                    {t(`events.${e.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {t(`events.${e.key}.desc`)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
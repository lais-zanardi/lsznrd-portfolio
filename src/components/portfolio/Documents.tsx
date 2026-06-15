import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const docs = [
  { key: "tcc", typeKey: "docs.type.report", year: "2025" },
];

export function Documents() {
  const { t } = useI18n();
  return (
    <section id="documentos" className="relative border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-pink">
            {t("docs.tag")}
          </span>
          <h2 className="font-display text-4xl font-black italic tracking-tight md:text-6xl">
            {t("docs.title")}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {docs.map((d, i) => (
            <motion.a
              key={d.key}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex items-start gap-5 border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-pink/40 hover:bg-white/[0.06]"
            >
              <span className="grid size-12 shrink-0 place-items-center border border-white/10 bg-black/40 text-brand-pink">
                <FileText className="size-5" />
              </span>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em]">
                  <span className="text-brand-pink">{t(d.typeKey)}</span>
                  <span className="text-neutral-500">· {d.year}</span>
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-neutral-100">
                  {t(`docs.${d.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {t(`docs.${d.key}.desc`)}
                </p>
              </div>
              <ExternalLink className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-brand-pink" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
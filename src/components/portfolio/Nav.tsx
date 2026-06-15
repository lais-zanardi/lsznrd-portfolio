import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function Nav() {
  const { t, lang, toggleLang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: t("nav.intro"), href: "#intro" },
    { label: t("nav.curriculum"), href: "#curriculo" },
    { label: t("nav.projects"), href: "#projetos" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.academic"), href: "#documentos" },
    { label: t("nav.certs"), href: "#certificados" },
    { label: t("nav.events"), href: "#eventos" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-8 -rotate-3 place-items-center bg-brand-red font-display text-xl font-black text-black transition-transform group-hover:rotate-0">
            L
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-tight">
            Laís Zanardi
          </span>
        </a>
        <div className="hidden items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand-pink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("ui.lang.switch")}
            className="grid h-9 w-12 place-items-center border border-white/10 bg-white/5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:border-brand-pink/50 hover:text-brand-pink"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("ui.theme.toLight") : t("ui.theme.toDark")}
            className="grid h-9 w-9 place-items-center border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-brand-pink/50 hover:text-brand-pink"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#contato"
            className="hidden bg-brand-red px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black ring-1 ring-brand-red/20 transition-colors hover:bg-brand-pink md:inline-block"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
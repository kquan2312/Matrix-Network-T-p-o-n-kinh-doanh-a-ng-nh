import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const navItems = [
    [t("nav.ecosystem"), "#ecosystem"],
    [t("nav.services"), "#services"],
    [t("nav.network"), "#network"],
    [t("nav.process"), "#process"],
    [t("nav.contact"), "#contact"]
  ];
  return (
    <>
      <header className="navbar">
        <a className="brand" href="#top">
          <span className="brand-mark">M</span>
          <span><strong>MATRIX</strong><small>NETWORK</small></span>
        </a>

        <nav className="desktop-nav">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <div className="navbar-actions">
          <a className="nav-cta" href="#contact">{t("nav.connect")} <ArrowUpRight size={15} /></a>
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={t("nav.switchLabel")}
            aria-live="polite"
          >
            {language === "vi" ? "EN" : "VI"}
          </button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </>
  );
}
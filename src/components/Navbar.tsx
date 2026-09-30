import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    [t("nav.ecosystem"), "#ecosystem"],
    [t("nav.services"), "#services"],
    [t("nav.network"), "#network"],
    [t("nav.process"), "#process"],
    [t("nav.contact"), "#contact"],
  ];

  // Xác định section đang hiển thị
  useEffect(() => {
    const sections = navItems
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [language]);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#top">
          <img
            className="brand-logo"
            src="/favicon.png"
            alt="Matrix Network"
          />

          <span>
            <strong>MATRIX</strong>
            <small>NETWORK</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={activeSection === href ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a className="nav-cta" href="#contact">
            {t("nav.connect")}
            <ArrowUpRight size={15} />
          </a>

          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={t("nav.switchLabel")}
            aria-live="polite"
          >
            {language === "vi" ? "EN" : "VI"}
          </button>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={
              open
                ? t("nav.menuClose")
                : t("nav.menuOpen")
            }
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
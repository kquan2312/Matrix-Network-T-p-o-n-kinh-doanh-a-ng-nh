import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand"><div className="brand-mark">M</div><div><strong>MATRIX</strong><small>NETWORK</small></div></div>
        <p>{t("footer.tagline")}</p>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Matrix Network</span>
        <div><a href="#ecosystem">{t("nav.ecosystem")}</a><a href="#services">{t("nav.services")}</a><a href="#network">{t("nav.network")}</a><a href="#contact">{t("nav.contact")}</a></div>
      </div>
    </footer>
  );
}
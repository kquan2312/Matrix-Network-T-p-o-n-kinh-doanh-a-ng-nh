import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column footer-company">
          <a className="footer-brand" href="#top" aria-label="Matrix Network">
            <span className="brand-mark">M</span>
            <span><strong>MATRIX</strong><small>NETWORK</small></span>
          </a>
          <address className="footer-contact">
            <a href="mailto:matrixholding.support@gmail.com"><Mail size={17} />matrixholding.support@gmail.com</a>
            <a href="tel:+84964243026"><Phone size={17} />(+84) 964 243 026</a>
            <span><MapPin size={17} />{t("footer.address")}</span>
          </address>
        </div>

        <nav className="footer-column" aria-label={t("footer.ecosystem")}>
          <h2>{t("footer.ecosystem")}</h2>
          <a href="#top">{t("footer.holding")}</a>
          <a href="#top">{t("footer.network")}</a>
          <a href="#contact">{t("footer.connect")}</a>
          <a href="#top">{t("footer.ventures")}</a>
        </nav>

        <nav className="footer-column" aria-label={t("footer.about")}>
          <h2>{t("footer.about")}</h2>
          <a href="#top">{t("footer.introduction")}</a>
          <a href="#process">{t("footer.guide")}</a>
          <a href="mailto:matrixholding.support@gmail.com?subject=Privacy%20policy">{t("footer.privacy")}</a>
          <a href="mailto:matrixholding.support@gmail.com?subject=Terms%20of%20use">{t("footer.terms")}</a>
        </nav>

        <div className="footer-column footer-social">
          <h2>{t("footer.follow")}</h2>
          <span className="footer-social-icon" aria-label={t("footer.facebook")}><Facebook size={24} /></span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Matrix Holding. {t("footer.copyright")}</span>
      </div>
    </footer>
  );
}
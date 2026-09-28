import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section className="cta section" id="contact">
      <div className="cta-index">09</div>
      <p className="eyebrow">{t("cta.eyebrow")}</p>
      <h2 dangerouslySetInnerHTML={{ __html: t("cta.title") }} />
      <p>{t("cta.description")}</p>
      <a className="button button-light" href="mailto:hello@matrixnetwork.vn">{t("cta.connect")} <ArrowUpRight size={18} /></a>
    </section>
  );
}
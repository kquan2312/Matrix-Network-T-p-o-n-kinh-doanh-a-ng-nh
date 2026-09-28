import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n";

export default function CaseStudies() {
  const { language, t } = useLanguage();
  return (
    <section className="cases section section-border">
      <div className="section-heading">
        <div className="section-index">08</div>
        <div><p className="eyebrow">{t("cases.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("cases.title") }} /></div>
      </div>
      <div className="case-placeholder">
        <div><span>{t("case.label")}</span><h3 dangerouslySetInnerHTML={{ __html: t("case.title") }} /></div>
        <div className="case-meta"><span>{language === "vi" ? "Công nghệ + Tư vấn" : "Technology + Consulting"}</span><ArrowUpRight /></div>
      </div>
    </section>
  );
}
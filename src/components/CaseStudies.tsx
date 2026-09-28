import { ArrowUpRight } from "lucide-react";
import { cases } from "../data/cases";
import { useLanguage } from "../i18n";

export default function CaseStudies() {
  const { language, t } = useLanguage();
  return (
    <section className="cases section section-border">
      <div className="section-heading">
        <div className="section-index">08</div>
        <div><p className="eyebrow">{t("cases.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("cases.title") }} /></div>
      </div>
      <div className="case-list">
        {cases.map(({ id, category, categoryVi, title, titleEn, services, servicesVi }) => (
          <article className="case-placeholder" key={id}>
            <div>
              <span>{t("cases.itemLabel")} {id} / {language === "vi" ? categoryVi ?? category : category}</span>
              <h3 dangerouslySetInnerHTML={{ __html: language === "en" ? titleEn ?? title : title }} />
            </div>
            <div className="case-meta"><span>{language === "vi" ? servicesVi ?? services : services}</span><ArrowUpRight /></div>
          </article>
        ))}
      </div>
    </section>
  );
}
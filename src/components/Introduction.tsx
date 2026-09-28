import { useLanguage } from "../i18n";

export default function Introduction() {
  const { t } = useLanguage();
  return (
    <section className="intro section section-border">
      <div className="section-index">02</div>
      <div className="intro-content">
        <p className="eyebrow">{t("intro.eyebrow")}</p>
        <h2 dangerouslySetInnerHTML={{ __html: t("intro.title") }} />
        <div className="intro-bottom">
          <p>{t("intro.description")}</p>
          <div className="journey">
            <span>{t("journey.need")}</span><i>→</i><span>{t("journey.connect")}</span><i>→</i><span>{t("journey.solve")}</span><i>→</i><strong>{t("journey.grow")}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
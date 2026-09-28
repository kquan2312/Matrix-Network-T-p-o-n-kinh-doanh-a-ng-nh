import { partnerTypes } from "../data/partners";
import { partnerTranslations, useLanguage } from "../i18n";

export default function Network() {
  const { language, t } = useLanguage();
  return (
    <section className="network section" id="network">
      <div className="section-heading">
        <div className="section-index">05</div>
        <div><p className="eyebrow">{t("network.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("network.title") }} /></div>
      </div>
      <div className="network-visual">
        {partnerTypes.map((item, index) => {
          const localized = partnerTranslations[language][index];
          return (
          <div key={item.number} className="network-group">
            <div className="network-column"><small>{item.number}</small><strong>{localized.title}</strong><p>{localized.description}</p></div>
            {index < partnerTypes.length - 1 && <div className="network-connector">×</div>}
          </div>
        )})}
      </div>
    </section>
  );
}
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { services } from "../data/services";
import { serviceTranslations, useLanguage } from "../i18n";

export default function Services() {
  const [open, setOpen] = useState("transform");
  const { language, t } = useLanguage();

  return (
    <section className="services section section-border" id="services">
      <div className="section-heading">
        <div className="section-index">04</div>
        <div><p className="eyebrow">{t("services.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("services.title") }} /></div>
      </div>
      <div className="service-list">
        {services.map(service => {
          const isOpen = open === service.id;
          const localized = serviceTranslations[language][service.id];
          return (
            <div className={`service-row ${isOpen ? "open" : ""}`} key={service.id}>
              <button className="service-main" onClick={() => setOpen(isOpen ? "" : service.id)}>
                <span className="service-number">{service.number}</span>
                <span className="service-label">{localized.label}</span>
                <h3>{localized.title}</h3>
                <span className="service-toggle">{isOpen ? <Minus /> : <Plus />}</span>
              </button>
              {isOpen && (
                <div className="service-expand">
                  <p>{localized.description}</p>
                  <ul>{localized.items.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
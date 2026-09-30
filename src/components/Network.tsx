import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Search, X } from "lucide-react";
import {
  companyCategories,
  companyLocations,
  networkCompanies,
  type CompanyCategory,
  type CompanyLocation
} from "../data/companies";
import { useLanguage } from "../i18n";

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLocaleLowerCase()
    .trim();
}

function isCompanyCategory(value: string): value is CompanyCategory {
  return companyCategories.some(item => item === value);
}

function isCompanyLocation(value: string): value is CompanyLocation {
  return companyLocations.some(item => item === value);
}

export default function Network() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CompanyCategory | "">("");
  const [location, setLocation] = useState<CompanyLocation | "">("");

  const filteredCompanies = useMemo(() => {
    const normalizedQuery = normalizeSearch(search);

    return networkCompanies.filter(company => {
      const matchesCategory = !category || company.category === category;
      const matchesLocation = !location || company.location === location;
      const searchableText = [
        company.name[language],
        company.description[language],
        ...company.capabilities[language],
        t(`network.category.${company.category}`),
        t(`network.location.${company.location}`)
      ].join(" ");

      return matchesCategory
        && matchesLocation
        && (!normalizedQuery || normalizeSearch(searchableText).includes(normalizedQuery));
    });
  }, [category, language, location, search, t]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setLocation("");
  };

  const createContactLink = (companyName: string) => {
    const subject = t("network.emailSubject").replace("{company}", companyName);
    const body = t("network.emailBody").replace("{company}", companyName);
    return `mailto:hello@matrixnetwork.vn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="network section" id="network">
      <div className="section-heading">
        <div className="section-index">05</div>
        <div>
          <p className="eyebrow">{t("network.eyebrow")}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t("network.title") }} />
        </div>
      </div>

      <div className="network-directory">
        <div className="network-directory-intro">
          <p>{t("network.description")}</p>
          <span className="network-sample-note">{t("network.sampleNote")}</span>
        </div>

        <div className="network-controls">
          <label className="network-control">
            <span>{t("network.searchLabel")}</span>
            <span className="network-input-wrap">
              <Search size={17} aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder={t("network.searchPlaceholder")}
              />
            </span>
          </label>
          <label className="network-control">
            <span>{t("network.categoryLabel")}</span>
            <select
              value={category}
              onChange={event => setCategory(isCompanyCategory(event.currentTarget.value) ? event.currentTarget.value : "")}
            >
              <option value="">{t("network.allCategories")}</option>
              {companyCategories.map(item => (
                <option key={item} value={item}>{t(`network.category.${item}`)}</option>
              ))}
            </select>
          </label>
          <label className="network-control">
            <span>{t("network.locationLabel")}</span>
            <select
              value={location}
              onChange={event => setLocation(isCompanyLocation(event.currentTarget.value) ? event.currentTarget.value : "")}
            >
              <option value="">{t("network.allLocations")}</option>
              {companyLocations.map(item => (
                <option key={item} value={item}>{t(`network.location.${item}`)}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="network-results">
          <p role="status" aria-live="polite">
            {t("network.resultCount").replace("{count}", String(filteredCompanies.length))}
          </p>
          {(search || category || location) && (
            <button className="network-clear" type="button" onClick={clearFilters}>
              <X size={14} aria-hidden="true" />
              {t("network.clearFilters")}
            </button>
          )}
        </div>

        {filteredCompanies.length > 0 ? (
          <div className="network-cards">
            {filteredCompanies.map(company => (
              <article className="network-card" key={company.id}>
                <div className="network-card-meta">
                  <span className="network-category">{t(`network.category.${company.category}`)}</span>
                  <span className="network-sample-badge">{t("network.sampleBadge")}</span>
                </div>
                <h3>{company.name[language]}</h3>
                <p className="network-card-location">
                  <MapPin size={15} aria-hidden="true" />
                  {t(`network.location.${company.location}`)}
                </p>
                <p className="network-card-description">{company.description[language]}</p>
                <div className="network-capabilities">
                  {company.capabilities[language].map(capability => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
                <a className="network-contact" href={createContactLink(company.name[language])}>
                  {t("network.contact")}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="network-empty">
            <h3>{t("network.emptyTitle")}</h3>
            <p>{t("network.emptyDescription")}</p>
            <button className="button button-dark" type="button" onClick={clearFilters}>
              {t("network.clearFilters")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

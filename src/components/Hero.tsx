import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow"><span>01</span> {t("hero.eyebrow")}</p>
        <h1 dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
        <p className="hero-description">{t("hero.description")}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#ecosystem">{t("hero.explore")} <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#contact">{t("hero.connect")} <MoveUpRight size={16} /></a>
          <a className="button button-dark" href="#network">{t("hero.network")} <ArrowUpRight size={17} /></a>
        </div>
      </div>

      <div className="hero-network">
        <div className="network-grid" />
        <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
        <div className="hero-line line-1" /><div className="hero-line line-2" />
        <div className="hero-line line-3" /><div className="hero-line line-4" />
        <div className="hero-node node-top">TECH</div>
        <div className="hero-node node-left">LEGAL</div>
        <div className="hero-node node-right">FIN</div>
        <div className="hero-node node-bottom">HR</div>
        <div className="hero-core"><span>M</span><small>MATRIX<br />NETWORK</small></div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import { ecosystem } from "../data/ecosystem";
import { ecosystemTranslations, useLanguage } from "../i18n";

const positions = [
  "map-node pos-top", "map-node pos-right-top", "map-node pos-right-bottom",
  "map-node pos-bottom", "map-node pos-left-bottom", "map-node pos-left-top"
];

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState("technology");
  const { language, t } = useLanguage();
  const active = ecosystem.find(x => x.id === activeNode)!;
  const activeTranslation = ecosystemTranslations[language][active.id];

  return (
    <section className="ecosystem section" id="ecosystem">
      <div className="section-heading">
        <div className="section-index">03</div>
        <div><p className="eyebrow">{t("ecosystem.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("ecosystem.title") }} /></div>
      </div>

      <div className="ecosystem-layout">
        <div className="ecosystem-map">
          <div className="map-crosshair crosshair-h" /><div className="map-crosshair crosshair-v" />
          <div className="map-ring ring-one" /><div className="map-ring ring-two" /><div className="map-ring ring-three" />
          {ecosystem.map((node, index) => (
            <button
              key={node.id}
              className={`${positions[index]} ${activeNode === node.id ? "active" : ""}`}
              onMouseEnter={() => setActiveNode(node.id)}
              onClick={() => setActiveNode(node.id)}
            >
              <span className="node-dot" /><span className="node-label">{node.short}</span>
            </button>
          ))}
          <div className="map-center"><span>M</span><strong>MATRIX</strong><small>NETWORK</small></div>
        </div>

        <div className="ecosystem-detail">
          <p className="eyebrow">{t("ecosystem.detailEyebrow")}</p>
          <div className="detail-number">0{ecosystem.findIndex(x => x.id === activeNode) + 1}</div>
          <h3>{activeTranslation.label}</h3>
          <p>{activeTranslation.description}</p>
          <div className="tag-list">{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <a href="#contact" className="text-link">{t("ecosystem.learn")} <MoveUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
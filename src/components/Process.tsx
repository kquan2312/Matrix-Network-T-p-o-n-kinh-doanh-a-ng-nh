import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Process() {
  const { language, t } = useLanguage();
  const steps = language === "en"
    ? [
        ["01", "Discover", "Identify your business needs and challenges."],
        ["02", "Connect", "Meet the right experts and partners."],
        ["03", "Solve", "Deliver solutions tailored to clear objectives."],
        ["04", "Grow", "Support, optimize, and build sustainable growth."]
      ]
    : [
        ["01", "Khám phá", "Xác định nhu cầu và bài toán doanh nghiệp."],
        ["02", "Kết nối", "Kết nối đúng chuyên gia và đối tác phù hợp."],
        ["03", "Giải quyết", "Triển khai giải pháp theo mục tiêu cụ thể."],
        ["04", "Tăng trưởng", "Đồng hành, tối ưu và tạo tăng trưởng dài hạn."]
      ];
  return (
    <section className="process section section-border" id="process">
      <div className="section-heading">
        <div className="section-index">06</div>
        <div><p className="eyebrow">{t("process.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("process.title") }} /></div>
      </div>
      <div className="process-grid">
        {steps.map(([number, title, text]) => (
          <div className="process-card" key={number}>
            <span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20} />
          </div>
        ))}
      </div>
    </section>
  );
}
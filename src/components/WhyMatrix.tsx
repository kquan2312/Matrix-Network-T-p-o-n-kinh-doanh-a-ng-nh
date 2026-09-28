import { useLanguage } from "../i18n";

export default function WhyMatrix() {
  const { language, t } = useLanguage();
  const principles = language === "en"
    ? [
        ["01", "One Network", "Access multiple service areas in one connected ecosystem."],
        ["02", "Right Expertise", "Connect with the right expert for each specific challenge."],
        ["03", "Integrated Solutions", "Combine capabilities to deliver complete solutions."],
        ["04", "Long-term Partnership", "Go beyond solving a short-term need."]
      ]
    : [
        ["01", "Một mạng lưới", "Tiếp cận nhiều nhóm dịch vụ trong một hệ sinh thái."],
        ["02", "Đúng chuyên môn", "Kết nối đúng chuyên gia cho từng bài toán cụ thể."],
        ["03", "Giải pháp tích hợp", "Kết hợp nhiều năng lực để tạo ra giải pháp tổng thể."],
        ["04", "Đối tác dài lâu", "Không chỉ giải quyết một nhu cầu ngắn hạn."]
      ];
  return (
    <section className="principles section">
      <div className="section-heading">
        <div className="section-index">07</div>
        <div><p className="eyebrow">{t("why.eyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t("why.title") }} /></div>
      </div>
      <div className="principle-grid">
        {principles.map(([number, title, text]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}
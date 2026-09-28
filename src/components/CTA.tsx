import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n";

export default function CTA() {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isFormOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isFormOpen && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedTopic = topic === "other"
      ? String(formData.get("otherTopic") ?? "")
      : t(`form.topic.${topic}`);
    const body = [
      `${t("form.name")}: ${formData.get("name")}`,
      `${t("form.email")}: ${formData.get("email")}`,
      `${t("form.company")}: ${formData.get("company") || "-"}`,
      `${t("form.phone")}: ${formData.get("phone") || "-"}`,
      `${t("form.topic")}: ${selectedTopic}`,
      `${t("form.message")}: ${formData.get("message")}`
    ].join("\n");
    const subject = encodeURIComponent(`${t("nav.contact")} — Matrix Network`);
    window.location.href = `mailto:hello@matrixnetwork.vn?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="cta section" id="contact">
      <div className="cta-index">09</div>
      <p className="eyebrow">{t("cta.eyebrow")}</p>
      <h2 dangerouslySetInnerHTML={{ __html: t("cta.title") }} />
      <p>{t("cta.description")}</p>
      <button className="button button-light" type="button" onClick={() => setIsFormOpen(true)}>
        {t("cta.connect")} <ArrowUpRight size={18} />
      </button>

      <dialog
        className="contact-dialog"
        ref={dialogRef}
        aria-labelledby="contact-form-title"
        aria-describedby="contact-form-description"
        onClose={() => setIsFormOpen(false)}
        onClick={event => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="contact-dialog-header">
          <div>
            <p className="eyebrow">{t("cta.eyebrow")}</p>
            <h2 id="contact-form-title">{t("form.title")}</h2>
            <p id="contact-form-description">{t("form.description")}</p>
          </div>
          <button
            className="contact-dialog-close"
            type="button"
            aria-label={t("form.close")}
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {t("form.name")}
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            {t("form.email")}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            {t("form.company")}
            <input name="company" autoComplete="organization" />
          </label>
          <label>
            {t("form.phone")}
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="contact-form-topic">
            {t("form.topic")}
            <select name="topic" value={topic} onChange={event => setTopic(event.target.value)} required>
              <option value="" disabled>{t("form.topicPlaceholder")}</option>
              <option value="technology">{t("form.topic.technology")}</option>
              <option value="finance">{t("form.topic.finance")}</option>
              <option value="legal">{t("form.topic.legal")}</option>
              <option value="hr">{t("form.topic.hr")}</option>
              <option value="marketing">{t("form.topic.marketing")}</option>
              <option value="consulting">{t("form.topic.consulting")}</option>
              <option value="other">{t("form.topic.other")}</option>
            </select>
          </label>
          {topic === "other" && (
            <label className="contact-form-topic">
              {t("form.topicOther")}
              <input name="otherTopic" required />
            </label>
          )}
          <label className="contact-form-message">
            {t("form.message")}
            <textarea name="message" rows={4} placeholder={t("form.messagePlaceholder")} required />
          </label>
          <div className="contact-form-footer">
            <p>{t("form.emailNotice")}</p>
            <button className="button button-dark" type="submit">{t("form.submit")} <ArrowUpRight size={17} /></button>
          </div>
        </form>
      </dialog>
    </section>
  );
}
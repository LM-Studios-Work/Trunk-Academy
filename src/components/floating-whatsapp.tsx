"use client";

export function FloatingWhatsApp() {
  const phoneNumber = "27813514996";
  const displayPhone = "081 351 4996";
  const defaultMessage = encodeURIComponent("Hi Trunk Academy, I’d like to make an enquiry.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside className="floating-whatsapp-container" aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label={`Chat with Trunk Academy on WhatsApp (${displayPhone})`}
        title={`Chat with Trunk Academy on WhatsApp (${displayPhone})`}
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <span className="floating-whatsapp-tooltip" role="tooltip">
          <strong>Enquire on WhatsApp</strong>
          <small>{displayPhone}</small>
        </span>
        <span className="floating-whatsapp-icon-wrap" aria-hidden="true">
          <i className="fa-brands fa-whatsapp floating-whatsapp-fa" aria-hidden="true" />
        </span>
      </a>
    </aside>
  );
}

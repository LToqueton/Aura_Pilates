import WhatsAppIcon from "./WhatsAppIcon";

export default function Schedule() {
  return (
    <section className="schedule" id="agendar">
      <div className="container">
        <p className="section-tag">Agende agora</p>
        <h2 className="section-title">Pronta para começar?</h2>
        <p>Agende sua aula experimental gratuita pelo WhatsApp. É rápido, fácil e sem compromisso.</p>
        <a
          href="https://wa.me/5511978874637?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20Aura%20Pilates.%20%F0%9F%A7%98%E2%80%8D%E2%99%80%EF%B8%8F"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <WhatsAppIcon />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export default function Location() {
  return (
    <section className="location" id="contato">
      <div className="container">
        <p className="section-tag">Localização</p>
        <h2 className="section-title">Venha nos visitar</h2>
        <p className="section-subtitle">Estamos esperando você de braços abertos.</p>
        <div className="location-grid">
          <div className="location-info">
            <h3>Informações de contato</h3>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <strong>Endereço</strong>
                <span>R. Rafael Monteiro Valeiro, 11 — Itaim Paulista<br />São Paulo — SP, CEP 08140-020</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <strong>Telefone / WhatsApp</strong>
                <span>(11) 99999-9999</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div className="info-text">
                <strong>Horário de funcionamento</strong>
                <span>Segunda a Sexta: 7h às 21h<br />Sábado: 8h às 13h</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <strong>E-mail</strong>
                <span>contato@aurapilates.com.br</span>
              </div>
            </div>
          </div>
          <div className="location-map" style={{ padding: 0, overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8814158704727!2d-46.399391!3d-23.500780399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce637f395133f5%3A0x8f3086f718a45795!2sR.%20Rafael%20Monteiro%20Valeiro%2C%2011%20-%20Itaim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008140-020!5e0!3m2!1spt-BR!2sbr!4v1771033543830!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

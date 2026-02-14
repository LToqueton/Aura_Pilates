export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Aura Pilates &mdash; Itaim Paulista, São Paulo</p>
        <h1>Descubra o poder do <em>Pilates</em> para transformar sua vida</h1>
        <p>Um espaço acolhedor onde cada movimento é guiado com cuidado, técnica e atenção personalizada.</p>
        <div className="btn-group">
          <a href="#agendar" className="btn btn-primary">Agendar Aula</a>
          <a href="#sobre" className="btn btn-outline">Saiba Mais</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const services = [
  { icon: "🧘‍♀️", title: "Pilates Clássico", desc: "Método tradicional com foco em fortalecimento do core, flexibilidade e consciência corporal. Aulas em aparelhos e solo.", tag: "Individual & Grupo" },
  { icon: "🏥", title: "Pilates Clínico", desc: "Recuperação e reabilitação de lesões com acompanhamento fisioterpêutico. Tratamento personalizado para cada caso.", tag: "Acompanhamento especializado" },
  { icon: "👶", title: "Pilates Gestante", desc: "Exercícios seguros e adaptados para cada trimestre da gravidez. Preparação do corpo para o parto e recuperação pós-parto.", tag: "Pré & Pós-parto" },
  { icon: "🧓", title: "Pilates para Idosos", desc: "Movimentos adaptados para melhorar equilíbrio, mobilidade e qualidade de vida. Exercícios seguros e progressivos.", tag: "Atenção personalizada" },
  { icon: "💪", title: "Condicionamento", desc: "Treinamento focado em performance física, resistência e definição muscular. Para quem busca resultados intensos.", tag: "Alta performance" },
  { icon: "🧠", title: "Pilates & Bem-estar", desc: "Integração corpo-mente com técnicas de respiração, relaxamento e consciência corporal para redução do estresse.", tag: "Mindfulness & Movimento" },
];

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("style", "opacity:1;transform:translateY(0);transition:opacity 0.6s ease, transform 0.6s ease;");
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current?.querySelectorAll(".service-card").forEach((el) => {
      el.setAttribute("style", "opacity:0;transform:translateY(30px);transition:opacity 0.6s ease, transform 0.6s ease;");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="servicos">
      <div className="container">
        <p className="section-tag">Nossos serviços</p>
        <h2 className="section-title">Modalidades</h2>
        <p className="section-subtitle">Cada corpo tem uma história. Encontre a modalidade perfeita para a sua.</p>
        <div className="services-grid" ref={cardsRef}>
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const benefits = [
  { num: "01", title: "Postura Alinhada", desc: "Correção postural através de exercícios específicos que fortalecem a musculatura profunda e promovem o alinhamento natural do corpo." },
  { num: "02", title: "Corpo Fortalecido", desc: "Tonificação muscular equilibrada, trabalhando grupos musculares de forma integrada para um corpo mais forte e funcional." },
  { num: "03", title: "Mente Tranquila", desc: "Redução do estresse e ansiedade através da conexão entre movimento e respiração, promovendo bem-estar mental." },
  { num: "04", title: "Recuperação", desc: "Reabilitação de lesões e prevenção de dores crônicas com exercícios terapêuticos supervisionados por profissionais." },
];

export default function Benefits() {
  const gridRef = useRef<HTMLDivElement>(null);

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
    gridRef.current?.querySelectorAll(".benefit-item").forEach((el) => {
      el.setAttribute("style", "opacity:0;transform:translateY(30px);transition:opacity 0.6s ease, transform 0.6s ease;");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits">
      <div className="container">
        <p className="section-tag">Benefícios</p>
        <h2 className="section-title">Por que escolher o Pilates?</h2>
        <p className="section-subtitle">Descubra como o Pilates pode transformar sua vida de dentro para fora.</p>
        <div className="benefits-grid" ref={gridRef}>
          {benefits.map((b, i) => (
            <div key={i} className="benefit-item">
              <div className="benefit-number">{b.num}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

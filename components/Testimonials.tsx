"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  { text: "Depois de 3 meses no Aura, minha dor nas costas desapareceu completamente. A equipe é incrível e o ambiente é acolhedor demais.", author: "Marina S.", role: "Aluna há 2 anos" },
  { text: "O atendimento personalizado faz toda a diferença. Cada aula é pensada para as minhas necessidades. Me sinto mais forte e confiante.", author: "Fernanda L.", role: "Aluna há 1 ano" },
  { text: "Depois da cirurgia no joelho, o Pilates clínico foi fundamental na minha recuperação. Hoje me sinto mais forte e confiante que antes.", author: "Carlos R.", role: "Aluno há 6 meses" },
];

export default function Testimonials() {
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
    gridRef.current?.querySelectorAll(".testimonial-card").forEach((el) => {
      el.setAttribute("style", "opacity:0;transform:translateY(30px);transition:opacity 0.6s ease, transform 0.6s ease;");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <p className="section-tag">Depoimentos</p>
        <h2 className="section-title">O que dizem nossos alunos</h2>
        <p className="section-subtitle">Histórias reais de transformação e bem-estar.</p>
        <div className="testimonials-grid" ref={gridRef}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote">“</div>
              <p>{t.text}</p>
              <div className="testimonial-author">{t.author}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function About() {
  const slides = [
    { src: "/about-1.jpg", alt: "Aura Pilates - Estúdio 1" },
    { src: "/about-2.jpg", alt: "Aura Pilates - Estúdio 2" },
    { src: "/about-3.jpg", alt: "Aura Pilates - Estúdio 3" },
    { src: "/about-4.jpg", alt: "Aura Pilates - Estúdio 4" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const moveCarousel = useCallback((dir: number) => {
    setCurrentSlide((prev) => (prev + dir + totalSlides) % totalSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [moveCarousel]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      moveCarousel(diff > 0 ? 1 : -1);
    }
  };

  return (
    <section className="about" id="sobre">
      <div className="container">
        <p className="section-tag">Sobre nós</p>
        <h2 className="section-title">Conheça o Aura Pilates</h2>
        <p className="section-subtitle">Um espaço onde saúde, movimento e acolhimento se encontram.</p>
        <div className="about-grid">
          <div className="about-carousel">
            <div
              className="carousel-wrapper"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="carousel-slide">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
                    />
                  </div>
                ))}
              </div>
              <button className="carousel-btn carousel-prev" onClick={() => moveCarousel(-1)}>&#8249;</button>
              <button className="carousel-btn carousel-next" onClick={() => moveCarousel(1)}>&#8250;</button>
            </div>
            <div className="carousel-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
          <div className="about-text">
            <h3>Um espaço pensado para você</h3>
            <p>
              O Aura Pilates nasceu do sonho de criar um ambiente onde cada pessoa se sinta acolhida
              e motivada a cuidar do seu corpo e mente. Com equipamentos modernos e profissionais
              dedicados, oferecemos uma experiência única de Pilates.
            </p>
            <p>
              Nosso método combina técnicas clássicas e contemporâneas, sempre respeitando os
              limites e objetivos individuais de cada aluno. Aqui, você não é apenas mais um &mdash;
              você é único(a).
            </p>
            <div className="about-stats">
              <div>
                <span className="stat-number">1</span>
                <span className="stat-label">Ano de experiência</span>
              </div>
              <div>
                <span className="stat-number">500+</span>
                <span className="stat-label">Alunos transformados</span>
              </div>
              <div>
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

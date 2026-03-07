"use client"

import { useEffect } from "react"
import Link from "next/link"

export function Hero() {
  useEffect(() => {
    // Scroll reveal para .reveal
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 55);
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

    return () => {
      ro.disconnect();
    };
  }, [])

  return (
    <section className="hero" id="inicio">
      {/* Logo Animation Container */}
      <div className="logo-anim-container">
        <div className="hero-logo-group mobile-hero-logo-group">
          {/* Desktop: isotipo izquierda, letras derecha. Mobile: usa flex-direction para reordenar */}
          <img 
            src="/isotipo2.png" 
            alt="EquityCorp Isotipo - Soluciones GovTech" 
            className="isotipo"
          />
          <div className="vertical-line"></div>
          <img 
            src="/letras2.png" 
            alt="EquityCorp Logo" 
            className="letras"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content-minimal">
        <p className="hero-sub-minimal">Impulsando la transformación digital del estado Ecuatoriano</p>
        <div className="hero-btns">
          <Link href="#about" className="btn-hero secondary">Sobre nosotros</Link>
          <Link href="#products" className="btn-hero primary">Conoce el GPi</Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

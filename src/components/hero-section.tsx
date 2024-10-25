'use client';

import React from 'react';
import Typist from 'react-typist-component';
import ParticleBackground from '@/components/particle-background';

export default function HeroSection() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about-me');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', '#about-me');
    }
  };

  return (
    <div className="hero-section" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2 }}>
        <ParticleBackground />
      </div>
      <div className="full-center-flex" style={{ pointerEvents: "none", zIndex: 1, position: 'relative' }}>
        <h1 style={{ fontSize: '3rem', position: 'relative', zIndex: 2 }}>
          <Typist typingDelay={100}>
            <Typist.Delay ms={500} />
            Nicky Pochinkov.
          </Typist>
        </h1>
        <a
          href="#about-me"
          className="transparent-button"
          onClick={scrollToAbout}
          style={{ position: 'relative', zIndex: 2, pointerEvents: 'all' }}
        >
          &#8964;
        </a>
      </div>
    </div>
  );
}

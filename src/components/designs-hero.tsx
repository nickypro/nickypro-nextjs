'use client';

import React from 'react';
import ScrollButton from '@/components/scroll-button';
import ParticleBackground from '@/components/particle-background';

export default function DesignsHero() {
  return (
    <div className="hero-section" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2 }}>
        <ParticleBackground />
      </div>
      <div className="full-center-flex" style={{
        pointerEvents: "none",
        zIndex: 1,
        position: 'relative'
      }}>
        <h1 style={{ pointerEvents: "all", fontSize: "3rem" }}>
          My Designs
        </h1>
        <ScrollButton />
      </div>
    </div>
  );
}
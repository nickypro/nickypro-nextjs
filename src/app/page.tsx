import React from 'react';
import AboutMe from '@/data/about-me';
import HeroSection from '@/components/hero-section';
import ListProjects from '@/components/list-projects';
import '@/assets/scss/main.scss';

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ListProjects />
    </>
  );
}

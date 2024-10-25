'use client';

import React from 'react';

export default function ScrollButton() {
  const scrollToDesigns = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#designs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', '#designs');
    }
  };

  return (
    <a href="#designs" className="transparent-button" onClick={scrollToDesigns}>&#8964;</a>
  );
}
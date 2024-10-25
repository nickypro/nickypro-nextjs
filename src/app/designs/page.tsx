import React from 'react';
import Image from 'next/image';
import '@/assets/scss/designs.scss';
import { getImages, type ImageData } from '@/lib/images';
import DesignsHero from '@/components/designs-hero';

export default async function DesignsPage() {
  const images = await getImages('posters');

  return (
    <>
      <DesignsHero />

      <div id="designs">
        <div className="full-center-flex light-section">
          <div>
            <h2>Posters</h2>
            <div className="design-grid">
              {images.map((image) => (
                <div key={image.name} className="design-grid-item">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={600}
                    height={800}
                    className="design-grid-image"
                  />
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="design-grid-info">
                      <h3>{image.name}</h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, transformStyle: 'preserve-3d' }}>
      <Particles
        id="tsparticles"
        style={{ pointerEvents: 'none' }}
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 69,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "none"
              },
              onclick: {
                enable: false,
                mode: "none"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 107.8921078921079,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 200,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
              },
              repulse: {
                distance: 271.72827172827175,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true,
          background: {
            color: "#000000",
            opacity: 0
          },
          canvasCss: {
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            top: 0
          }
        }}
      />
    </div>
  );
}

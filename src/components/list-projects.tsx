'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from '@/assets/scss/projects.module.scss';

export default function ListProjects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '100px'
    });

    const projectCards = document.querySelectorAll(`.${styles.projectCard}`);
    projectCards.forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects">
      <div className="full-center-flex light-section">
        <h1>Main Projects</h1>
        <div className={styles.projectsSection}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              )}
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                <br/>
                <p>{project.description}</p>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

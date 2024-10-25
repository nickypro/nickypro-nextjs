'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/assets/scss/about.module.scss';

export default function AboutMe() {
 return (
   <div id="about-me" className={styles.aboutSection}>
     <div className={styles.aboutContainer}>
       <div className={styles.imageContainer}>
         <Image
           src="/images/home/nicky-2d.png"
           alt="Nicky Pochinkov"
           width={500}
           height={500}
           style={{ objectFit: "cover" }}
         />
       </div>
       <div className={styles.textContent}>
         <h1>About Me</h1>
         <p>
           I'm an independent researcher focused on AI safety, working to develop a mechanistic understanding of how
           large language models process and reason about information. My research covers machine unlearning, modularity,
           and understanding planning in transformers - all aimed at understanding how these systems work on a larger scale.
         </p>
         <p>
           With a background in theoretical physics and competitive mathematics, I combine research with practical
           engineering. I've built everything from quantum spin simulations to full-stack web apps and mobile
           applications. These days I mostly write Python for ML research, but I'm comfortable working across the stack.
         </p>
         <div className={styles.socialLinks}>
           <a href="https://github.com/nickypro" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
           <a href="https://link.nicky.pro/cv" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>CV</a>
           <a href="https://linkedin.com/in/nicky-pochinkov" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
           <a href="mailto:chat@nicky.pro" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Email</a>
           <a href="https://lesswrong.com/user/nicky" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LessWrong</a>
         </div>
       </div>
     </div>
   </div>
 );
}

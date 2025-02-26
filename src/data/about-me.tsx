'use client';

import React from 'react';
import Image from 'next/image';
import { Github, FileText, Linkedin, Mail, BookOpen, GraduationCap } from 'lucide-react';
import styles from '@/assets/scss/about.module.scss';

const SocialLink = ({ href, icon: Icon, text }: { href: string; icon: React.ElementType; text: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
    <Icon className={styles.icon} />
    {text}
  </a>
);

const socialLinks = [
  { href: "https://github.com/nickypro", icon: Github, text: "GitHub" },
  { href: "https://link.nicky.pro/cv", icon: FileText, text: "CV" },
  { href: "https://linkedin.com/in/nicky-pochinkov", icon: Linkedin, text: "LinkedIn" },
  { href: "mailto:chat@nicky.pro", icon: Mail, text: "Email" },
  { href: "https://lesswrong.com/user/nicky", icon: BookOpen, text: "LessWrong" },
  { href: "https://link.nicky.pro/scholar", icon: GraduationCap, text: "Google Scholar" }
];

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
           With a background in theoretical physics and olympiad mathematics, I combine research with practical
           engineering. I've built everything from quantum spin simulations to full-stack web apps and mobile
           applications. These days I mostly write Python for ML research, but I'm comfortable working across the stack.
         </p>
         <div className={styles.socialLinks}>
           {socialLinks.map((link) => (
             <SocialLink key={link.href} {...link} />
           ))}
         </div>
       </div>
     </div>
   </div>
 );
}

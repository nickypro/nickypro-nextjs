'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/assets/scss/nav.scss';

const pages = [
  {
    title: "Projects",
    slug: "/#projects",
  },{
    title: "Designs",
    slug: "/designs",
  },{
    title: "Posts",
    slug: "/posts",
  }
];

const Nav = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar-container");
      if (!navbar) return;

      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 40) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
      } else {
        navbar.style.backgroundColor = "#112";
        navbar.style.boxShadow = "0 2px 2px 0px rgba(255, 255, 255, 0.2)";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = async (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();

    const hashPart = hash.split('#')[1];

    if (pathname === '/designs' && hashPart === 'projects') {
      // Navigate to home page with projects hash
      window.location.href = '/#projects';

      // After navigation, scroll to projects section
      setTimeout(() => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return;
    }

    const element = document.querySelector(hash);

    if (!element && pathname !== '/') {
      // Navigate to home page with hash
      window.location.href = `/${hash}`;

      // After navigation, scroll to section
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return;
    }
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', hash);
  };

  return (
    <div>
      <nav className="navbar-container" id="navbar-container">
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li>
              <Link href="/" className={pathname === '/' ? 'navbar-active' : ''}>
                Nicky.pro
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="navbar-nav">
            {pages.map((page) => {
              const [path, hash] = page.slug.split('#');
              const isActive = pathname === path;

              return (
                <li key={page.slug}>
                  {hash ? (
                    <a
                      href={page.slug}
                      className={isActive ? 'navbar-active' : ''}
                      onClick={(e) => handleAnchorClick(e, `#${hash}`)}
                    >
                      {page.title}
                    </a>
                  ) : (
                    <Link
                      href={page.slug}
                      className={isActive ? 'navbar-active' : ''}
                    >
                      {page.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
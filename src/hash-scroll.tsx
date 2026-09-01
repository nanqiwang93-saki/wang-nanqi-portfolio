'use client';

import { useEffect } from 'react';

export default function HashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;

    const id = decodeURIComponent(window.location.hash.slice(1));
    const element = document.getElementById(id);
    if (!element) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const root = document.documentElement;
        const previous = root.style.scrollBehavior;
        const offset = window.innerWidth <= 640 ? 68 : 84;
        root.style.scrollBehavior = 'auto';
        window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY - offset);
        root.style.scrollBehavior = previous;
      });
    });
  }, []);

  return null;
}

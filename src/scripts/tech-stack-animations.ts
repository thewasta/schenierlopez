import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initTechStackAnimations() {
  // Animate Section Header
  const header = document.querySelector('#tech .animate-reveal');
  if (header) {
    gsap.fromTo(
      header,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Note: The vertical scrolling animation is handled via CSS in TechStackSection.astro
  // for better performance and smoother infinite looping.
}

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class AboutAnimations {
  private aboutSection: HTMLElement | null;
  private statCards: NodeListOf<Element> | null;
  private skillProgressBars: NodeListOf<Element> | null;
  private skillCategories: NodeListOf<Element> | null;

  constructor() {
    this.aboutSection = document.querySelector('#about');
    this.statCards = document.querySelectorAll('.stat-card');
    this.skillProgressBars = document.querySelectorAll('.skill-progress');
    this.skillCategories = document.querySelectorAll('.skill-category');

        if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  private init(): void {
    if (!this.aboutSection) return;

    this.initCounters();
    this.initSkillAnimations();
    this.initParallaxEffects();
    this.initScrollReveals();
    this.initInteractiveElements();
  }

    private initCounters(): void {
    if (!this.statCards) return;

    this.statCards.forEach((card) => {
      const counter = card.querySelector('.counter') as HTMLElement;
      if (!counter) return;

      const target = parseInt(counter.dataset.target || '0');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60 FPS

      let current = 0;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      // Start animation when section is visible
      gsap.to(counter, {
        scrollTrigger: {
          trigger: this.aboutSection,
          start: 'top 70%',
          onEnter: () => updateCounter(),
          once: true
        }
      });
    });
  }

  // Skill Progress Bars Animation
  private initSkillAnimations(): void {
    if (!this.skillProgressBars) return;

    this.skillProgressBars.forEach((bar) => {
      const targetWidth = bar.dataset.width || '0%';

      // Set CSS variable for width
      (bar as HTMLElement).style.setProperty('--width', targetWidth);

      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
          onEnter: () => {
            bar.classList.add('animated');
          },
          once: true
        }
      });
    });
  }

  // Parallax Effects
  private initParallaxEffects(): void {
    if (!this.aboutSection) return;

    // Background code elements parallax
    const codeElements = this.aboutSection.querySelectorAll('.code-background-element');

    codeElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -20 - (index * 5),
        ease: 'none',
        scrollTrigger: {
          trigger: this.aboutSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });

    // Photo container subtle parallax
    const photoContainer = this.aboutSection.querySelector('.order-2');
    if (photoContainer) {
      gsap.to(photoContainer, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: this.aboutSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }

  // Scroll-triggered Reveal Animations
  private initScrollReveals(): void {
    if (!this.aboutSection) return;

    // Staggered reveals for elements
    const revealElements = this.aboutSection.querySelectorAll('.animate-reveal, .animate-reveal-delay-1, .animate-reveal-delay-2, .animate-reveal-delay-3, .animate-reveal-delay-4');

    revealElements.forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    // Skill categories slide-up animation
    if (this.skillCategories) {
      gsap.fromTo(this.skillCategories,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: this.skillCategories[0],
            start: 'top 75%',
            once: true
          }
        }
      );
    }
  }

  // Interactive Elements
  private initInteractiveElements(): void {
    if (!this.aboutSection) return;

    // Stat cards hover effects
    if (this.statCards) {
      this.statCards.forEach((card) => {
        const counter = card.querySelector('.counter');
        const label = card.querySelector('.text-slate-400');

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });

          if (counter) {
            gsap.to(counter, {
              scale: 1.1,
              color: '#60a5fa', // blue-400
              duration: 0.3,
              ease: 'power2.out'
            });
          }

          if (label) {
            gsap.to(label, {
              color: '#cbd5e1', // slate-300
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });

          if (counter) {
            gsap.to(counter, {
              scale: 1,
              color: '', // revert to default
              duration: 0.3,
              ease: 'power2.out'
            });
          }

          if (label) {
            gsap.to(label, {
              color: '', // revert to default
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      });
    }

    // Skill items hover effects
    const skillItems = this.aboutSection.querySelectorAll('.skill-item');
    skillItems.forEach((item) => {
      const progressBar = item.querySelector('.skill-progress');
      const label = item.querySelector('.text-slate-300');

      item.addEventListener('mouseenter', () => {
        if (progressBar) {
          gsap.to(progressBar, {
            scale: 1.05,
            brightness: 1.2,
            duration: 0.3,
            ease: 'power2.out'
          });
        }

        if (label) {
          gsap.to(label, {
            x: 4,
            color: '#f1f5f9', // slate-100
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      item.addEventListener('mouseleave', () => {
        if (progressBar) {
          gsap.to(progressBar, {
            scale: 1,
            brightness: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }

        if (label) {
          gsap.to(label, {
            x: 0,
            color: '', // revert to default
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });

    // Philosophy cards interactive effects
    const philosophyCards = this.aboutSection.querySelectorAll('.flex.items-start.space-x-3');
    philosophyCards.forEach((card, index) => {
      const icon = card.querySelector('.w-6.h-6');
      const content = card.querySelector('div');

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          x: 8,
          duration: 0.3,
          ease: 'power2.out'
        });

        if (icon) {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
          });
        }

        if (content) {
          gsap.to(content, {
            opacity: 0.9,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        });

        if (icon) {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }

        if (content) {
          gsap.to(content, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });

    // Photo container hover effect
    const photoContainer = this.aboutSection.querySelector('.group');
    if (photoContainer) {
      photoContainer.addEventListener('mouseenter', () => {
        const decorativeElements = photoContainer.querySelectorAll('.absolute.w-20, .absolute.w-24');
        decorativeElements.forEach((element, index) => {
          gsap.to(element, {
            scale: 1.2,
            opacity: 0.3,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out'
          });
        });
      });

      photoContainer.addEventListener('mouseleave', () => {
        const decorativeElements = photoContainer.querySelectorAll('.absolute.w-20, .absolute.w-24');
        decorativeElements.forEach((element) => {
          gsap.to(element, {
            scale: 1,
            opacity: 0.2,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }
  }

  // Cleanup method
  public destroy(): void {
    // Kill all GSAP animations related to this section
    if (this.aboutSection) {
      gsap.killTweensOf(this.aboutSection.querySelectorAll('*'));
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === this.aboutSection ||
            this.aboutSection.contains(trigger.trigger as Element)) {
          trigger.kill();
        }
      });
    }
  }
}

export default function initAboutAnimations(): AboutAnimations {
  return new AboutAnimations();
}
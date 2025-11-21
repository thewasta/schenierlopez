import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class HeroAnimations {
  private heroSection: HTMLElement | null;
  private codeElements: NodeListOf<Element> | null;
  private metricsCards: NodeListOf<Element> | null;

  constructor() {
    this.heroSection = document.querySelector('#hero');
    this.codeElements = document.querySelectorAll('.code-float-element');
    this.metricsCards = document.querySelectorAll('.metric-card');

        if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  private init(): void {
    if (!this.heroSection) return;

    this.initFloatingCodeElements();
    this.initMetricsCardsAnimation();
    this.initParallaxEffects();
    this.initMouseInteraction();
    this.initTypewriterEffect();
    this.initParticleAnimation();
  }

    private initFloatingCodeElements(): void {
    if (!this.codeElements) return;

    this.codeElements.forEach((element, index) => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: index * 0.5
      });

            tl.to(element, {
        y: 'random(-20, 20)',
        x: 'random(-10, 10)',
        rotation: 'random(-5, 5)',
        duration: 'random(4, 8)',
        ease: 'power1.inOut'
      });

            gsap.to(element, {
        opacity: 'random(0.3, 0.7)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.3
      });
    });
  }

    private initMetricsCardsAnimation(): void {
    if (!this.metricsCards) return;

    gsap.fromTo(this.metricsCards,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 2,
        scrollTrigger: {
          trigger: '.metric-card',
          start: 'top 80%',
          once: true
        }
      }
    );

        this.metricsCards.forEach((card) => {
      const numberElement = card.querySelector('.text-4xl');
      if (numberElement) {
        const text = numberElement.textContent || '0';
        const number = parseInt(text.replace(/\D/g, ''));

        gsap.from(numberElement, {
          textContent: 0,
          duration: 2,
          delay: 2.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            numberElement.textContent = Math.ceil(this.targets()[0].textContent) + text.replace(/\d/g, '');
          }
        });
      }
    });
  }

    private initParallaxEffects(): void {
    if (!this.heroSection) return;

        gsap.to('.bg-tech-pattern', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: this.heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

        this.codeElements?.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -30 - (index * 10),
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

    private initMouseInteraction(): void {
    if (!this.heroSection) return;

    this.heroSection.addEventListener('mousemove', (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

            const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;

            gsap.to('.code-float-element', {
        x: x * 20,
        y: y * 20,
        duration: 0.5,
        ease: 'power2.out'
      });

            this.metricsCards?.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardX = (clientX - rect.left - rect.width / 2) / rect.width;
        const cardY = (clientY - rect.top - rect.height / 2) / rect.height;

        gsap.to(card, {
          rotationY: cardX * 10,
          rotationX: -cardY * 10,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

        this.heroSection.addEventListener('mouseleave', () => {
      gsap.to('.code-float-element', {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });

      gsap.to(this.metricsCards, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }

    private initTypewriterEffect(): void {
    const typingElements = document.querySelectorAll('.typing-text, .typing-text-delay, .typing-text-delay-2');

    typingElements.forEach((element, index) => {
      const text = element.textContent || '';
      const delay = index * 1000; // Stagger the animations

      gsap.fromTo(element,
        {
          width: 0,
          opacity: 0
        },
        {
          width: '100%',
          opacity: 1,
          duration: 2,
          delay: delay / 1000,
          ease: 'power2.out',
          onComplete: () => {
                        gsap.to(element, {
              borderOpacity: 0,
              duration: 0.5,
              repeat: -1,
              yoyo: true
            });
          }
        }
      );
    });
  }

    private initParticleAnimation(): void {
    const particles = document.querySelectorAll('[class^="particle-"]');

    particles.forEach((particle, index) => {
      const randomPath = () => {
        const path = [];
        for (let i = 0; i < 3; i++) {
          path.push({
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: Math.random() * 2 + 0.5
          });
        }
        return path;
      };

      gsap.to(particle, {
        ...randomPath()[0],
        duration: 10 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      });
    });
  }

    private initIntersectionObserver(): void {
    if (!this.heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.globalTimeline.play();
          } else {
            gsap.globalTimeline.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.heroSection);
  }

    public destroy(): void {
        gsap.killTweensOf('*');
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}

export default function initHeroAnimations(): HeroAnimations {
  return new HeroAnimations();
}
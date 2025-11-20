import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initPortfolioAnimations() {
  const slider = document.getElementById("portfolio-slider");
  const cards = document.querySelectorAll(".project-card");
  const prevBtn = document.getElementById("prev-project");
  const nextBtn = document.getElementById("next-project");
  const progressBar = document.getElementById("scroll-progress");

  if (!slider || cards.length === 0) return;

  // 1. Staggered Entrance Animation
  gsap.fromTo(
    cards,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: slider,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // 2. Mouse Tracking Glow Effect
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const y = (e as MouseEvent).clientY - rect.top;

      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // 3. Scroll Progress & Navigation
  const updateProgress = () => {
    if (!slider || !progressBar) return;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;
    const progress = (currentScroll / maxScroll) * 100;
    progressBar.style.width = `${progress}%`;
  };

  slider.addEventListener("scroll", updateProgress);
  // Initial update
  updateProgress();

  // Mouse Wheel Horizontal Scroll
  slider.addEventListener("wheel", (e) => {
    if ((e as WheelEvent).deltaY !== 0) {
      e.preventDefault();
      slider.scrollLeft += (e as WheelEvent).deltaY;
    }
  });

  // Navigation Buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -400, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 400, behavior: "smooth" });
    });
  }
}

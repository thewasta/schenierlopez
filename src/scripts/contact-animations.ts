import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initContactAnimations() {
  const section = document.getElementById("contact");
  if (!section) return;

  // Animate Section Header
  const header = section.querySelector("h2");
  const subheader = section.querySelector("p");

  if (header) {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

  if (subheader) {
    gsap.from(subheader, {
      scrollTrigger: {
        trigger: subheader,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }

  // Animate Contact Cards
  const cards = section.querySelectorAll(".contact-card");
  if (cards.length > 0) {
    gsap.to(cards, {
      scrollTrigger: {
        trigger: cards[0],
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
  }
}

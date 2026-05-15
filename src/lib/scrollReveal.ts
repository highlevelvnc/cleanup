"use client";

export function initScrollReveal(root: ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (els.length === 0) return () => {};

  els.forEach((el) => {
    if (!el.hasAttribute("data-revealed")) el.setAttribute("data-revealed", "false");
  });

  const reveal = (el: HTMLElement) => {
    const delay = Number(el.dataset.delay || 0);
    if (delay > 0) {
      window.setTimeout(() => el.setAttribute("data-revealed", "true"), delay);
    } else {
      el.setAttribute("data-revealed", "true");
    }
  };

  let observer: IntersectionObserver | null = null;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => observer!.observe(el));
  } else {
    els.forEach(reveal);
  }

  // Failsafe: never leave the page blank.
  const failsafe = window.setTimeout(() => {
    els.forEach((el) => el.setAttribute("data-revealed", "true"));
  }, 3500);

  return () => {
    observer?.disconnect();
    window.clearTimeout(failsafe);
  };
}

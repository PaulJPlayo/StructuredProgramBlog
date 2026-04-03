document.addEventListener("DOMContentLoaded", () => {
  const years = document.querySelectorAll("[data-current-year]");

  years.forEach((year) => {
    year.textContent = new Date().getFullYear();
  });

  const tocLinks = Array.from(document.querySelectorAll("[data-toc-link]"));

  if (!tocLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const setActiveLink = (id) => {
    tocLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");

      if (href) {
        setActiveLink(href.slice(1));
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveLink(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.25, 0.5, 0.75],
    }
  );

  sections.forEach((section) => observer.observe(section));
  setActiveLink(sections[0].id);
});

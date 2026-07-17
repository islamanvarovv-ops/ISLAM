const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.glass, .section-heading, .skills-layout').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

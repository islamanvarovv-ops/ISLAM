const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.glass, .section-heading, .skills-layout').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const orbs = document.querySelectorAll('.orb');
window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - .5) * 24;
  const y = (event.clientY / window.innerHeight - .5) * 24;
  orbs.forEach((orb, index) => {
    const strength = index === 0 ? 1 : -.65;
    orb.style.translate = `${x * strength}px ${y * strength}px`;
  });
}, { passive: true });

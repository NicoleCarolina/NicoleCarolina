// Smooth scroll for custom triggers
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-scroll]');
  if (!target) return;
  e.preventDefault();
  const sel = target.getAttribute('data-scroll');
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Header shadow on scroll
const header = document.getElementById('header');
const setHeader = () => {
  if (window.scrollY > 6) {
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,.25)';
  } else {
    header.style.boxShadow = 'none';
  }
};
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

// Image fallbacks for missing logos
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  img.addEventListener('error', () => {
    const fallback = img.getAttribute('data-fallback');
    if (fallback && img.src !== location.origin + fallback) {
      img.src = fallback;
    }
  }, { once: true });
});


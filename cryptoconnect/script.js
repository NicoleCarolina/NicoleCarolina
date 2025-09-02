document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    const phone = '5490000000000'; // TODO: replace with the real number
    const defaultMsg = encodeURIComponent('Hola! Me interesa CRYPTOCONNECT.');
    whatsappBtn.addEventListener('click', (e) => {
      // ensure it always opens with message template
      const url = `https://wa.me/${phone}?text=${defaultMsg}`;
      whatsappBtn.setAttribute('href', url);
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});


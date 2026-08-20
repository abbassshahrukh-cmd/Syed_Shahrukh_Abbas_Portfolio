const nav = document.querySelector('.nav');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.boxShadow = y > 20 ? '0 8px 30px #0000000d' : 'none';
  lastY = y;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

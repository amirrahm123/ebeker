const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}
function closeMob() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

const progressBar = document.getElementById('progressBar');
const scrollTopBtn = document.getElementById('scrollTop');
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.transform = `scaleX(${scrolled / total})`;
  if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', scrolled > 400);
  if (nav) nav.classList.toggle('scrolled', scrolled > 20);
});

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const counters = document.querySelectorAll('[data-target]');
const cIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start) + '+';
      if (start >= target) clearInterval(timer);
    }, 28);
    cIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => cIO.observe(c));

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}

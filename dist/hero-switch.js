(() => {
  const viewport = document.querySelector('.hero-scroll');
  const hero = viewport?.querySelector('.hero');
  const track = document.querySelector('.hero-slides');
  const buttons = [...document.querySelectorAll('[data-hero-slide]')];
  const slides = [...document.querySelectorAll('.hero-slide')];
  if (!viewport || !hero || !track || buttons.length < 2) return;
  let distance = 0;
  let frame = 0;
  const update = () => {
    frame = 0;
    const progress = Math.max(0, Math.min(1, -viewport.getBoundingClientRect().top / distance));
    track.style.transform = `translateX(${-progress * 50}%)`;
    const active = progress >= .5 ? 1 : 0;
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === active)));
    slides.forEach((slide, i) => { slide.inert = i !== active; });
    document.querySelector('.nav-meta span').textContent = active ? '8 SCENES' : '12 SCENES';
  };
  const resize = () => {
    distance = Math.max(window.innerHeight, 500);
    viewport.style.height = `${hero.offsetHeight + distance}px`;
    // On short screens, keep the bottom of the hero reachable before switching.
    hero.style.top = `${Math.min(0, window.innerHeight - hero.offsetHeight)}px`;
    update();
  };
  window.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', resize);
  new ResizeObserver(resize).observe(hero);
  const setSlide = index => window.scrollTo({
    top: window.scrollY + viewport.getBoundingClientRect().top + index * distance,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
  buttons.forEach((button, i) => button.addEventListener('click', () => setSlide(i)));
  document.querySelector('.hero-switch').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const index = event.key === 'ArrowRight' ? 1 : 0;
    buttons[index].focus({ preventScroll: true });
    setSlide(index);
  });
  let touchStart = null;
  viewport.addEventListener('touchstart', event => { touchStart = event.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', event => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 45) setSlide(delta < 0 ? 1 : 0);
    touchStart = null;
  }, { passive: true });
  document.fonts.ready.then(resize);
  resize();
})();

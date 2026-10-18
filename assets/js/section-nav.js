const sectionNav = document.querySelector('.section-nav');
const menuToggle = sectionNav.querySelector('.section-nav-toggle');
const menuLinks = sectionNav.querySelector('.section-nav-links');

function setMenuOpen(open) {
  sectionNav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
}

sectionNav.classList.add('menu-ready');

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

menuLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

sectionNav.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

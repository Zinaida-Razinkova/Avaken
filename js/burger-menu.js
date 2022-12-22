(() => {
  const menuBtnRef = document.querySelector('[data-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('header__menu-open');
    document.body.classList.toggle('backdrop__show');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('header__menu-open');
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".head__burger");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });
  }

  if (closeBtn && menu && burger) {
    closeBtn.addEventListener("click", function () {
      menu.classList.remove("active");
      burger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  }
});




document.addEventListener('DOMContentLoaded', function () {

  const modal = document.getElementById('questionBankModal');
  const closeBtn = modal.querySelector('.modal__close');
  const openBtn = document.getElementById('openModal');

  if (!modal || !closeBtn || !openBtn) return;

  // открыть
  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  // закрыть по крестику
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  // закрыть по клику вне
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // закрыть по ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

});


window.addEventListener('load', () => {
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('.exam__bundle-toggle');
    if (!toggle) return;

    const wrapper = toggle.closest('.bundle-container'); // ✅ FIX

    const right = wrapper?.querySelector('.exam__bundle-right');

    toggle.classList.toggle('show');
    right?.classList.toggle('show');
  });
});
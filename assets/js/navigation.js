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

  // открыть
  document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const id = button.getAttribute('data-modal');
      const modal = document.getElementById(id);

      if (!modal) return;

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // закрытие (крестик)
  document.querySelectorAll('.modal__close').forEach(btn => {
    btn.addEventListener('click', function () {
      const modal = btn.closest('.modal-container');

      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  });

  // клик вне окна
  document.querySelectorAll('.modal-container').forEach(container => {
    container.addEventListener('click', function (e) {
      if (e.target === container) {
        container.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });

  // ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-container').forEach(modal => {
        modal.style.display = 'none';
      });
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

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.mobile-navigation .menu-item-has-children > a')
      .forEach(link => {

        link.addEventListener('click', function (e) {
          e.preventDefault();

          const parent = link.parentElement;

          parent.classList.toggle('active');
        });

      });

});
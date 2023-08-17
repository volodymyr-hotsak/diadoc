const menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});

/*modal*/

const modalTriggers = document.querySelectorAll('[data-modal]'),
  modalCloseBtn = document.querySelector('[data-close]'),
  modal = document.querySelector('.modal');

function showModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalTriggers.forEach((modal) => {
  modal.addEventListener('click', showModal);
});

modalCloseBtn.addEventListener('click', hideModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

/*scroll*/
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

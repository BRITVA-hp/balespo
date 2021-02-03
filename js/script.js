window.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion__header');

  accordions.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('accordion__content--active');
      item.lastElementChild.lastElementChild.classList.toggle('accordion__arrow--active');
    });
  });
});
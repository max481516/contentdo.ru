const modalEl = document.querySelector('.contact__modal');
const openModalEl = document.querySelector('.contact__btn');
const openModalNavEl = document.querySelector('.nav__contacts');
const closeModalEl = document.querySelector('.closeModal');

openModalEl.addEventListener('click', () => {
    modalEl.classList.add('open');
});

closeModalEl.addEventListener('click', () => {
    modalEl.classList.remove('open');
});

openModalNavEl.addEventListener('click', () => {
    modalEl.classList.add('open');
});

closeModalEl.addEventListener('click', () => {
    modalEl.classList.remove('open');
});






    
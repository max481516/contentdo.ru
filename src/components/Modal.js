import {
    modalEl,
    openModalEl,
    openModalNavEl,
    openModalFootEl,
    closeModalEl
} from '../common.js';


openModalEl.addEventListener('click', () => {
    modalEl.classList.add('open');
});

openModalNavEl.addEventListener('click', () => {
    modalEl.classList.add('open');
});

openModalFootEl.addEventListener('click', () => {
    modalEl.classList.add('open');
});

closeModalEl.addEventListener('click', () => {
    modalEl.classList.remove('open');
});

/* import { titlesEl } from "../common.js";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-titles');
        }
    });
});

titlesEl.forEach(title => {
    observer.observe(title);
}); */


import {titlesEl } from "../common.js";

// Apply the initial hidden state to the elements
titlesEl.forEach(title => {
    title.classList.add('hide-initially');
});

const observerOptions = {
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide-initially');
            entry.target.classList.add('fade-in-titles');
        }
    });
}, observerOptions);

titlesEl.forEach(video => {
    observer.observe(video);
});
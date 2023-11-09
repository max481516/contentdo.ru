/* import { descriptionRightEl } from "../common.js";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-right-description');
        } 
    });
});

descriptionRightEl.forEach(video => {
    observer.observe(video);
}); */


import { descriptionRightEl } from "../common.js";

// Apply the initial hidden state to the elements
descriptionRightEl.forEach(description => {
    description.classList.add('hide-initially');
});

const observerOptions = {
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide-initially');
            entry.target.classList.add('fade-in-right-description');
        }
    });
}, observerOptions);

descriptionRightEl.forEach(video => {
    observer.observe(video);
});
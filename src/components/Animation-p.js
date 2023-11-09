/* import { paragraphsEl } from "../common.js";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

paragraphsEl.forEach(paragraph => {
    observer.observe(paragraph);
});  */

import { paragraphsEl } from "../common.js";

// Apply the initial hidden state to the elements
paragraphsEl.forEach(paragraph => {
    paragraph.classList.add('hide-initially');
});

const observerOptions = {
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide-initially');
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

paragraphsEl.forEach(video => {
    observer.observe(video);
});

/* import { descriptionLeftEl } from "../common.js";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-left-description');
        }
    });
});

descriptionLeftEl.forEach(description => {
    observer.observe(description);
}); */

import { descriptionLeftEl } from "../common.js";

// Apply the initial hidden state to the elements
descriptionLeftEl.forEach(description => {
    description.classList.add('hide-initially');
});

const observerOptions = {
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide-initially');
            entry.target.classList.add('fade-in-left-description');
        }
    });
}, observerOptions);

descriptionLeftEl.forEach(video => {
    observer.observe(video);
});
/* import { videosLeftEl } from "../common.js";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-left');
        } 
    });
});

videosLeftEl.forEach(video => {
    observer.observe(video);
}); */

import { videosLeftEl } from "../common.js";

// Apply the initial hidden state to the elements
videosLeftEl.forEach(video => {
    video.classList.add('hide-initially');
});

const observerOptions = {
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide-initially');
            entry.target.classList.add('fade-in-left');
        }
    });
}, observerOptions);

videosLeftEl.forEach(video => {
    observer.observe(video);
});


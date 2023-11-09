/* import { videosRightEl } from "../common.js";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-right');
        }
    });
});

videosRightEl.forEach(description => {
    observer.observe(description);
}); */


import { videosRightEl } from "../common.js";

// Apply the initial hidden state to the elements
videosRightEl.forEach(video => {
    video.classList.add('hide-initially');
});

const observerOptions = {
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide-initially');
            entry.target.classList.add('fade-in-right');
        } 
    });
}, observerOptions);

videosRightEl.forEach(video => {
    observer.observe(video);
});

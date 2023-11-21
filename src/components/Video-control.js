



/* let i;
for (i = 0; i < videosEl.length; i++) {
videosEl[i].addEventListener("click", function () {
    const controls = this.nextElementSibling;
    if (controls.innerHTML === "▶") {
    controls.innerHTML = "| |";
    this.play();
    } else {
    controls.innerHTML = "▶";
    this.pause();
    }
});
videosEl[i].addEventListener("mouseout", function () {
    const controls = this.nextElementSibling;
    if (!this.paused) {
    controls.style.display = "none";
    }
});
videosEl[i].addEventListener("mouseover", function () {
    const controls = this.nextElementSibling;
    controls.style.display = "flex";
});
videosEl[i].addEventListener(
    "ended",
    function () {
    const controls = this.nextElementSibling;
    controls.style.display = "flex";
    controls.innerHTML = "▶";
    },
    false
);
} */

import { videosEl } from "../common.js";

videosEl.forEach((video) => {
    const controls = video.nextElementSibling;

    video.addEventListener('click', () => {
        // Toggle play/pause
        if (controls.innerHTML === '▶') {
            controls.innerHTML = '| |';
            video.play();
        } else {
            controls.innerHTML = '▶';
            video.pause();
        }
    });

    
    video.addEventListener('mouseout', () => {
        // Hide controls if the video is playing
        if (!video.paused) {
            controls.classList.add('control-visibility');
        }
    });
    
    
    video.addEventListener('mouseover', () => {
        // Show controls
        controls.classList.remove('control-visibility');
    });
    

    video.addEventListener('ended', () => {
        // Show controls and set to play symbol when video ends
        controls.classList.remove('control-visibility');
        controls.innerHTML = '▶';
    });
});

  
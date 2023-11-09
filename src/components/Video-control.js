import { videosEl } from "../common.js";



let i;
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
}

/* videosEl.forEach((video) => {
    const controls = video.nextElementSibling;
  
    video.addEventListener('click', () => {
      if (controls.innerHTML === '▶') {
        controls.innerHTML = '| |';
        video.play();
      } else {
        controls.innerHTML = '▶';
        video.pause();
      }
    });
  
    video.addEventListener('mouseout', () => {
      if (!video.paused) {
        controls.style.display = 'none';
      }
    });
  
    video.addEventListener('mouseover', () => {
      controls.style.display = 'flex';
    });
  
    video.addEventListener('ended', () => {
      controls.style.display = 'flex';
      controls.innerHTML = '▶';
    });
  }); */
  
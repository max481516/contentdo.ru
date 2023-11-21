import { counterEl } from "../common.js";

let counterValue = 0;
let animationStarted = false;

const updateCounter = () => {
    const animateCounter = () => {
        if (counterValue < 1000000) {
            counterValue += 10000;
            counterEl.textContent = counterValue;
            requestAnimationFrame(animateCounter);
        } else {
            // When the counter reaches a million, replace with question marks
            counterEl.textContent = '₽???????';
        }
    };

    const startCounterAnimation = () => {
        const rect = counterEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if ((rect.top < windowHeight && rect.bottom >= 0) && !animationStarted) {
            animationStarted = true;
            animateCounter();
        } else if (rect.bottom < 0 || rect.top >= windowHeight) {
            // Reset the counter and animation flag when element exits viewport
            counterValue = 0;
            animationStarted = false;
        }
    };

    window.addEventListener('scroll', startCounterAnimation);
};

// Call the updateCounter function to set up the counter animation
updateCounter();

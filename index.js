import './src/components/Modal.js';
import './src/components/Counter.js';
import './src/components/Animation-p.js';
import './src/components/Animation-titles.js';
import './src/components/Animation-videoR.js';
import './src/components/Animation-videoL.js';
import './src/components/Animation-descriptionR.js';
import './src/components/Animation-descriptionL.js';
import './src/components/Video-control.js';
import './src/components/Hamburger-menu.js';
import './src/components/Mobile-portfolio.js';












/* 




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
            counterEl.textContent = '???????';
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




(() => {
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
})();





(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    paragraphsEl.forEach(paragraph => {
        observer.observe(paragraph);
    }); 
})();


(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-titles');
            }
        });
    });

    titlesEl.forEach(title => {
        observer.observe(title);
    });
})();
 
 


(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-right');
                } 
            });
        });
    
        videosRightEl.forEach(video => {
            observer.observe(video);
        });
})();
    

(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-left');
            } 
        });
    });
    
    videosLeftEl.forEach(video => {
        observer.observe(video);
    });
})();

(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-left-description');
            }
        });
    });
    
    descriptionLeftEl.forEach(description => {
        observer.observe(description);
    });
})();

(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-right-description');
            }
        });
    });
    
    descriptionRightEl.forEach(description => {
        observer.observe(description);
    });
})(); 

/* (() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    contactBtnEl.forEach(button => {
        observer.observe(button);
    });
})(); */






/* else {
                    entry.target.classList.remove('fade-in-right'); 
                } */
 
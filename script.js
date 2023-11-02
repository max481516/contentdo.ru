/* const modalEl = document.querySelector('.contact__modal');
const openModalEl = document.querySelector('.contact__btn');
const openModalNavEl = document.querySelector('.nav__contacts');
const openModalFootEl =document.querySelector('#footer-contacts');
const closeModalEl = document.querySelector('.closeModal');

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


(() => {
    const paragraphs = document.querySelectorAll('p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    }); 
})();


(() => {
    const titles = document.querySelectorAll('h1, h2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-titles');
            }
        });
    });

    titles.forEach(title => {
        observer.observe(title);
    });
})();
 */

/* const videos = document.querySelectorAll('.video1, .video3');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-right');
            }
        });
    });

    videos.forEach(video => {
        observer.observe(video);
    }); */


const videos = document.querySelectorAll('.video2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-left');
        }
    });
});

videos.forEach(video => {
    observer.observe(video);
});















    
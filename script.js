const elements = document.querySelectorAll('.js-animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }

    });
}, {
    threshold: 0.2
});

elements.forEach((el) => observer.observe(el));
// JS Trigger
const popElements = document.querySelectorAll('.js-pop');

const popObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }

    });
}, {
    threshold: 0.2
});

popElements.forEach((el) => popObserver.observe(el));

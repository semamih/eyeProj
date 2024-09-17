// slider
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);


// Функция для плавного скролла
function scrollToSectionCenter(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    // Прокрутить секцию в видимую область
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: -30,
    });

    const offset = 30;
    const scrollPosition = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}

document.querySelector('.preAboutLink').addEventListener('click', (event) => scrollToSectionCenter(event, 'preAbout'));
document.querySelector('.preAboutLink-2').addEventListener('click', (event) => scrollToSectionCenter(event, 'preAbout'));

document.querySelector('.header-button').addEventListener('click', (event) => scrollToSectionCenter(event, 'buy'));

document.querySelector('.conditionsLink').addEventListener('click', (event) => scrollToSection(event, 'conditions'));
document.querySelector('.conditionsLink-2').addEventListener('click', (event) => scrollToSection(event, 'conditions'));

document.querySelector('.resultLink').addEventListener('click', (event) => scrollToSection(event, 'result'));
document.querySelector('.resultLink-2').addEventListener('click', (event) => scrollToSection(event, 'result'));

document.querySelector('.feedbackLink').addEventListener('click', (event) => scrollToSection(event, 'feedback'));
document.querySelector('.feedbackLink-2').addEventListener('click', (event) => scrollToSection(event, 'feedback'));

document.querySelector('.questionsLink').addEventListener('click', (event) => scrollToSection(event, 'questions'));
document.querySelector('.questionsLink-2').addEventListener('click', (event) => scrollToSection(event, 'questions'));





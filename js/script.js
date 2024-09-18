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
    // event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}
function scrollToSection(event, sectionId) {
    // event.preventDefault();
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

let acc = document.getElementsByClassName("accordion");
let panels = document.querySelectorAll('.panel');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
        // Закрытие всех панелей
        for (let j = 0; j < panels.length; j++) {
            if (j !== i) {
                panels[j].classList.remove('show');
                acc[j].classList.remove('active');
            }
        }

        // Открытие выбранной панели
        if (!panels[i].classList.contains('show')) {
            panels[i].classList.add('show');
            acc[i].classList.add('active');
        } else {
            panels[i].classList.remove('show');
            acc[i].classList.remove('active');
        }
    });
}

// Burger
let burger = document.querySelector('.burger');
let closeMenu = document.querySelector('.close-menu');
let menu = document.querySelector('.close-menu-container');
let headerMenu = document.getElementById("menu");
let logo = document.getElementById('logo');
let headerButton = document.querySelector('.header-button');
let header = document.querySelector('.header');

burger.onclick = function() {
    burger.style.display = 'none';
    menu.style.display = 'flex';
    closeMenu.style.display = 'flex';
    setTimeout(() => {
        headerMenu.style.display = 'flex';
        headerMenu.classList.add('show');
    }, 220);
    logo.style.display = 'none';
    headerButton.style.display = 'none';
    header.classList.add('active-menu');
}
closeMenu.onclick = function() {
    burger.style.display = 'flex';
    menu.style.display = 'none';
    closeMenu.style.display = 'none';
    headerMenu.style.display = 'none';
    logo.style.display = 'flex';
    headerButton.style.display = 'flex';
    header.classList.remove('active-menu');
}








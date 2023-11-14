'use strict';

// CHANGING THE YEAR 

const yearEl =  document.querySelector('.year');

const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;


// MOBILE NAVIGATION

const btn = document.querySelector('.btn-mobile-nav');

const header = document.querySelector('.header');


btn.addEventListener('click', () => {
    header.classList.toggle('nav-open');
})


// MAKING NAVIGATION STICKY

const heroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    
    if(!ent.isIntersecting) {
        document.body.classList.add('sticky')
    }

    if(ent.isIntersecting) {
        document.body.classList.remove('sticky')
    }
}, {
    root: null,
    threshold:0,
    rootMargin:'-80px'
});

obs.observe(heroEl);


// SMOOTH SCROLLING

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = link.getAttribute('href');

        if(href === '#') {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        }

        if(href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);

            sectionEl.scrollIntoView({behavior:"smooth"})
        }

        if(link.classList.contains('main-nav-link')) {
            header.classList.toggle('nav-open');
        }
    })
})
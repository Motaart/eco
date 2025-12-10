document.addEventListener('DOMContentLoaded', () => {
    const quoteLines = document.querySelectorAll('.quote-line');
    if (quoteLines.length > 0) {
        setTimeout(() => quoteLines[0].classList.add('revealed'), 500);
    }
    if (quoteLines.length > 1) {
        setTimeout(() => quoteLines[1].classList.add('revealed'), 1100);
    }
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(acc => {
        acc.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => revealOnScroll.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = window.innerHeight * 0.12; 
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    const quoteLines = document.querySelectorAll('.quote-line');
    if (quoteLines.length > 0) {
        setTimeout(() => quoteLines[0].classList.add('revealed'), 500);
    }
    if (quoteLines.length > 1) {
        setTimeout(() => quoteLines[1].classList.add('revealed'), 1100);
    }
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
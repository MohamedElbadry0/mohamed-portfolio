// Scroll Animations
const sections = document.querySelectorAll('section');

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const animateSections = () => {
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', function() {
    const image = document.querySelector('.animated-image');
    
    const scrollPosition = window.scrollY;

    const rotation = scrollPosition * 0.1;  
    image.style.transform = `rotateY(${rotation}deg)`;  

});

window.addEventListener('load', function() {
    const image = document.querySelector('.animated-image');
    image.style.opacity = '1';  
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about-box");

    const fadeInOnScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0) scale(1)";
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const skillBoxes = document.querySelectorAll(".skill-box");

    function showSkills() {
        const triggerBottom = window.innerHeight * 0.85;
        skillBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showSkills);
    showSkills(); 
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
// projects section
document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');
    
    const scrollHandler = () => {
        projectBoxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                box.classList.add('show');
            }
        });
    };
    
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();  
});
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".project-carousel", {
        loop: true,
        autoplay: { delay: 3000 }, 
        pagination: { el: ".swiper-pagination", clickable: true }, 
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, 
        slidesPerView: 1, 
        spaceBetween: 10, 
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

 
    gsap.to(".form-success", {
        opacity: 1,  
        y: -10,      
        duration: 0.5, 
        ease: "power2.out", 
        display: "block" 
    });

 
    setTimeout(() => {
        gsap.to(".form-success", { 
            opacity: 0,  
            y: 10,  
            display: "none" 
        });

        document.getElementById("contact-form").reset();
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = 100;
        
        const updateCount = () => {
            let increment = target / speed;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});


    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
    document.addEventListener("DOMContentLoaded", function () {
        const skillBoxes = document.querySelectorAll('.skill-box');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.2
        });
    
        skillBoxes.forEach(box => observer.observe(box));
    });
    
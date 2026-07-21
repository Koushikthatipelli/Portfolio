/*=========================================
PROJECT JS
CuraOne | Roadmap | OneDesk
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initCursor();
    initScrollProgress();
    initSmoothScroll();
    initActiveNavigation();

});

/*=========================================
LOADER
=========================================*/

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 900);

    });

}

/*=========================================
CUSTOM CURSOR
=========================================*/

function initCursor() {

    const cursor = document.querySelector(".cursor");
    const blur = document.querySelector(".cursor-blur");

    if (!cursor || !blur) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        blur.style.left = e.clientX + "px";
        blur.style.top = e.clientY + "px";

    });

    document
        .querySelectorAll("a,button,.feature-card,.overview-card,.gallery-image,.tech-card,.challenge-card")
        .forEach(item => {

            item.addEventListener("mouseenter", () => {

                cursor.style.transform = "translate(-50%,-50%) scale(1.8)";

            });

            item.addEventListener("mouseleave", () => {

                cursor.style.transform = "translate(-50%,-50%) scale(1)";

            });

        });

}

/*=========================================
SCROLL PROGRESS
=========================================*/

function initScrollProgress() {

    const progress = document.querySelector(".progress-progress span");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const scrollTop = window.pageYOffset;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollTop / height) * 100;

        progress.style.width = percent + "%";

    });

}

/*=========================================
LENIS SMOOTH SCROLL
=========================================*/

// function initSmoothScroll() {

//     if (typeof Lenis === "undefined") return;

//     const lenis = new Lenis({

//         duration: 1.2,
//         smoothWheel: true,
//         wheelMultiplier: 1

//     });

//     function raf(time) {

//         lenis.raf(time);

//         requestAnimationFrame(raf);

//     }

//     requestAnimationFrame(raf);

// }

/*=========================================
ACTIVE NAVIGATION
=========================================*/

function initActiveNavigation() {

    const links = document.querySelectorAll(".nav-links a");

    const sections = document.querySelectorAll("section[id]");

    if (!links.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}
/*=========================================
PART 2
GSAP ANIMATIONS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeader();
    initCounters();
    initScrollReveal();
    initAnchorLinks();
    initGalleryHover();

});

/*=========================================
HEADER EFFECT
=========================================*/

function initHeader() {

    const header = document.getElementById("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(8,8,8,.88)";
            header.style.backdropFilter = "blur(24px)";
            header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(8,8,8,.45)";
            header.style.boxShadow = "none";

        }

    });

}

/*=========================================
COUNTER ANIMATION
=========================================*/

function initCounters() {

    const counters = document.querySelectorAll("[data-count]");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.count);

            let current = 0;

            const speed = target / 80;

            const update = () => {

                current += speed;

                if (current < target) {

                    counter.textContent = Math.floor(current);

                    requestAnimationFrame(update);

                } else {

                    counter.textContent = target;

                }

            };

            update();

            observer.unobserve(counter);

        });

    }, {

        threshold: .5

    });

    counters.forEach(counter => observer.observe(counter));

}

/*=========================================
GSAP SCROLL REVEAL
=========================================*/

function initScrollReveal() {

    if (typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(

        ".section-title,.overview-card,.feature-card,.gallery-item,.tech-card,.timeline-item,.challenge-card,.metric-card,.cta-box"

    ).forEach(element => {

        gsap.from(element, {

            y: 80,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: element,

                start: "top 85%",

                toggleActions: "play none none reverse"

            }

        });

    });

}

/*=========================================
SMOOTH NAVIGATION
=========================================*/

// function initAnchorLinks() {

//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//         anchor.addEventListener("click", function (e) {

//             const target = document.querySelector(

//                 this.getAttribute("href")

//             );

//             if (!target) return;

//             e.preventDefault();


//         });

//     });

// }

/*=========================================
GALLERY PARALLAX HOVER
=========================================*/

function initGalleryHover() {

    document.querySelectorAll(".gallery-image").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x / rect.width - .5) * 12;

            const rotateX = (.5 - y / rect.height) * 12;

            card.style.transform = `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1200px) rotateX(0) rotateY(0) scale(1)";

        });

    });

}
/*=========================================
PART 3
PREMIUM INTERACTIONS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroAnimation();
    initFloatingCards();
    initMagneticButtons();
    initScrollIndicator();
    disableCursorOnMobile();

});

/*=========================================
HERO ANIMATION
=========================================*/

function initHeroAnimation() {

    if (typeof gsap === "undefined") return;

    const tl = gsap.timeline();

    tl.from(".project-badge", {

        y:40,
        opacity:0,
        duration:.8

    })

    .from(".hero-content h1",{

        y:60,
        opacity:0,
        duration:1

    },"-=.4")

    .from(".hero-content p",{

        y:40,
        opacity:0,
        duration:.8

    },"-=.6")

    .from(".hero-buttons",{

        y:40,
        opacity:0,
        duration:.8

    },"-=.5")

    .from(".hero-metrics",{

        y:40,
        opacity:0,
        duration:.8

    },"-=.5")

    .from(".hero-preview",{

        x:80,
        opacity:0,
        duration:1.2

    },"-=1");

}

/*=========================================
FLOATING CARDS
=========================================*/

function initFloatingCards(){

    if(typeof gsap==="undefined") return;

    gsap.to(".doctor",{

        y:-15,

        repeat:-1,

        yoyo:true,

        duration:2,

        ease:"power1.inOut"

    });

    gsap.to(".patient",{

        y:-20,

        repeat:-1,

        yoyo:true,

        duration:2.8,

        ease:"power1.inOut"

    });

    gsap.to(".pharmacy",{

        y:-18,

        repeat:-1,

        yoyo:true,

        duration:2.3,

        ease:"power1.inOut"

    });

}

/*=========================================
MAGNETIC BUTTONS
=========================================*/

function initMagneticButtons(){

    document.querySelectorAll(".primary-btn,.secondary-btn")
    .forEach(button=>{

        button.addEventListener("mousemove",e=>{

            const rect=button.getBoundingClientRect();

            const x=e.clientX-rect.left-rect.width/2;

            const y=e.clientY-rect.top-rect.height/2;

            button.style.transform=
            `translate(${x*0.18}px,${y*0.18}px)`;

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="translate(0,0)";

        });

    });

}

/*=========================================
SCROLL INDICATOR
=========================================*/

function initScrollIndicator(){

    const indicator=document.querySelector(".scroll-line");

    if(!indicator) return;

    if(typeof gsap==="undefined") return;

    gsap.to(indicator,{

        height:90,

        repeat:-1,

        yoyo:true,

        duration:1.3,

        ease:"power1.inOut"

    });

}

/*=========================================
IMAGE PARALLAX
=========================================*/

// window.addEventListener("scroll",()=>{

//     const image=document.querySelector(".dashboard-frame");

//     if(!image) return;

//     const offset=window.pageYOffset;

//     image.style.transform=
//     `translateY(${offset*0.08}px)`;

// });

/*=========================================
SECTION GLOW
=========================================*/

document.querySelectorAll(".feature-card,.tech-card,.challenge-card")
.forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width)*100;

        const y=((e.clientY-rect.top)/rect.height)*100;

        card.style.background=
        `radial-gradient(circle at ${x}% ${y}%,
        rgba(255,255,255,.08),
        #111 55%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#111";

    });

});

/*=========================================
BACK TO TOP
=========================================*/

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="back-to-top";

document.body.appendChild(topButton);

// window.addEventListener("scroll",()=>{

//     if(window.scrollY>600){

//         topButton.classList.add("show");

//     }else{

//         topButton.classList.remove("show");

//     }

// });

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
MOBILE OPTIMIZATION
=========================================*/

function disableCursorOnMobile(){

    if(window.innerWidth<=768){

        document.querySelector(".cursor")?.remove();

        document.querySelector(".cursor-blur")?.remove();

    }

}

/*=========================================
WINDOW RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    disableCursorOnMobile();

});

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(

"%c🚀 CuraOne | Roadmap.io | OneDesk",

"color:#ffffff;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Koushik",

"color:#888;font-size:13px;"

);
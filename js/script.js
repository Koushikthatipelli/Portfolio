/*==================================================
            PORTFOLIO V3
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
            LOADER
==================================================*/

window.addEventListener("load", () => {

    const tl = gsap.timeline();

    tl.to(".loader h1", {

        opacity:0,

        y:-80,

        duration:.8,

        ease:"power3.out"

    })

    .to(".loader",{

        y:"-100%",

        duration:1,

        ease:"power4.inOut"

    })

    .from("header",{

        y:-80,

        opacity:0,

        duration:.8

    },"-=.5")

    .from(".hero-left > *",{

        y:60,

        opacity:0,

        stagger:.12,

        duration:.8,

        ease:"power3.out"

    },"-=.5")

    .from(".hero-center",{

        scale:.9,

        opacity:0,

        duration:1

    },"-=.7")

    .from(".hero-card",{

        x:60,

        opacity:0,

        stagger:.12,

        duration:.8

    },"-=.8");

});

/*==================================================
            LENIS
==================================================*/

const lenis = new Lenis({

    duration:1.2,

    smoothWheel:true,

    wheelMultiplier:1,

    touchMultiplier:2,

    infinite:false

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time)=>{

    lenis.raf(time*1000);

});

gsap.ticker.lagSmoothing(0);

/*==================================================
            SCROLL PROGRESS
==================================================*/

const progress=document.querySelector(".progress-bar span");

lenis.on("scroll",({scroll})=>{

    const height=

    document.documentElement.scrollHeight-

    window.innerHeight;

    progress.style.width=

    (scroll/height)*100+"%";

});

/*==================================================
            APPLE CURSOR
==================================================*/

const cursor=document.querySelector(".cursor");

const blur=document.querySelector(".cursor-blur");

let mouseX=0;

let mouseY=0;

window.addEventListener("mousemove",(e)=>{

    mouseX=e.clientX;

    mouseY=e.clientY;

});

gsap.ticker.add(()=>{

    gsap.set(cursor,{

        x:mouseX,

        y:mouseY

    });

    gsap.to(blur,{

        x:mouseX,

        y:mouseY,

        duration:.45,

        ease:"power3.out"

    });

});

/*==================================================
            CURSOR HOVER
==================================================*/

const cursorTargets=document.querySelectorAll(

"a,button,.tech-card,.stat-card,.hero-card,.project-item,.featured-project,.contact-item"

);

cursorTargets.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        gsap.to(cursor,{

            width:56,

            height:56,

            background:"transparent",

            border:"2px solid #fff",

            duration:.25

        });

        gsap.to(blur,{

            scale:1.4,

            duration:.3

        });

    });

    item.addEventListener("mouseleave",()=>{

        gsap.to(cursor,{

            width:18,

            height:18,

            background:"#fff",

            border:"0px solid transparent",

            duration:.25

        });

        gsap.to(blur,{

            scale:1,

            duration:.3

        });

    });

});
/*==================================================
            HERO PARALLAX
==================================================*/

gsap.to(".hero-left",{

    y:-120,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

gsap.to(".hero-center",{

    y:-70,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

gsap.to(".hero-right",{

    y:-140,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

/*==================================================
SECTION TITLES
==================================================*/

gsap.utils.toArray(".section-title").forEach(section=>{

    gsap.from(section,{

        y:80,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 82%"

        }

    });

});

/*==================================================
ABOUT
==================================================*/

gsap.from(".about-heading",{

    x:-100,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".about",

        start:"top 75%"

    }

});

gsap.from(".about-content",{

    x:100,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".about",

        start:"top 75%"

    }

});

/*==================================================
STAT CARDS
==================================================*/

gsap.from(".stat-card",{

    y:60,

    opacity:0,

    stagger:.15,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".stats-grid",

        start:"top 80%"

    }

});

/*==================================================
TECH STACK
==================================================*/

gsap.from(".tech-card",{

    y:70,

    opacity:0,

    stagger:.08,

    duration:.7,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".tech-grid",

        start:"top 82%"

    }

});

/*==================================================
FEATURED PROJECT
==================================================*/

gsap.from(".featured-project",{

    y:120,

    opacity:0,

    duration:1,

    ease:"power4.out",

    scrollTrigger:{

        trigger:".featured-project",

        start:"top 80%"

    }

});

/*==================================================
PROJECT GRID
==================================================*/

gsap.from(".project-item",{

    y:90,

    opacity:0,

    stagger:.2,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".project-grid",

        start:"top 82%"

    }

});

/*==================================================
JOURNEY
==================================================*/

gsap.from(".journey-card",{

    y:80,

    opacity:0,

    stagger:.18,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".journey-wrapper",

        start:"top 80%"

    }

});

/*==================================================
CONTACT
==================================================*/

gsap.from(".contact-wrapper",{

    scale:.94,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".contact",

        start:"top 80%"

    }

});

/*==================================================
FOOTER
==================================================*/

gsap.from("footer",{

    y:80,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:"footer",

        start:"top 95%"

    }

});
/*==================================================
            MAGNETIC BUTTONS
==================================================*/

const magneticButtons = document.querySelectorAll(

".primary-btn,.secondary-btn,.resume-btn"

);

magneticButtons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;

        const y=e.clientY-rect.top-rect.height/2;

        gsap.to(button,{

            x:x*.25,

            y:y*.25,

            duration:.35,

            ease:"power2.out"

        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            x:0,

            y:0,

            duration:.6,

            ease:"elastic.out(1,.45)"

        });

    });

});

/*==================================================
3D CARD TILT
==================================================*/

const cards=document.querySelectorAll(

".hero-card,.tech-card,.stat-card,.project-item,.featured-project,.contact-item"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-.5)*12;

        const rotateX=((y/rect.height)-.5)*-12;

        gsap.to(card,{

            rotationY:rotateY,

            rotationX:rotateX,

            transformPerspective:1200,

            transformOrigin:"center",

            duration:.35,

            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            rotationX:0,

            rotationY:0,

            duration:.7,

            ease:"power3.out"

        });

    });

});

/*==================================================
FEATURED IMAGE PARALLAX
==================================================*/

gsap.to(".featured-right img",{

    y:-70,

    ease:"none",

    scrollTrigger:{

        trigger:".featured-project",

        start:"top bottom",

        end:"bottom top",

        scrub:true

    }

});

/*==================================================
PROJECT IMAGE PARALLAX
==================================================*/

gsap.utils.toArray(".project-item img").forEach(image=>{

    gsap.to(image,{

        y:-40,

        ease:"none",

        scrollTrigger:{

            trigger:image,

            start:"top bottom",

            end:"bottom top",

            scrub:true

        }

    });

});

/*==================================================
FLOATING AVATAR
==================================================*/

gsap.to(".avatar-wrapper",{

    y:-18,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/*==================================================
HERO IMAGE SCALE
==================================================*/

gsap.to(".avatar-wrapper",{

    scale:.92,

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

/*==================================================
PROJECT HOVER LIFT
==================================================*/

document.querySelectorAll(

".featured-project,.project-item"

).forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        gsap.to(project,{

            y:-12,

            duration:.35,

            ease:"power2.out"

        });

    });

    project.addEventListener("mouseleave",()=>{

        gsap.to(project,{

            y:0,

            duration:.35,

            ease:"power2.out"

        });

    });

});

/*==================================================
TECH ICON FLOAT
==================================================*/

document.querySelectorAll(".tech-card i").forEach(icon=>{

    gsap.to(icon,{

        y:-8,

        repeat:-1,

        yoyo:true,

        duration:2,

        ease:"sine.inOut",

        delay:Math.random()

    });

});
/*==================================================
            NAVBAR GLASS EFFECT
==================================================*/

const header = document.querySelector("#header");

lenis.on("scroll", ({ scroll }) => {

    if (scroll > 60) {

        gsap.to(header, {

            background: "rgba(5,5,5,.72)",

            backdropFilter: "blur(18px)",

            borderBottom: "1px solid rgba(255,255,255,.08)",

            duration: .3,

            overwrite: "auto"

        });

    } else {

        gsap.to(header, {

            background: "transparent",

            backdropFilter: "blur(0px)",

            borderBottom: "1px solid transparent",

            duration: .3,

            overwrite: "auto"

        });

    }

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

sections.forEach(section => {

    ScrollTrigger.create({

        trigger: section,

        start: "top center",

        end: "bottom center",

        onEnter: () => setActive(section.id),

        onEnterBack: () => setActive(section.id)

    });

});

function setActive(id){

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + id){

            link.classList.add("active");

        }

    });

}

/*==================================================
COUNTER ANIMATION
==================================================*/

document.querySelectorAll(".stat-card h3").forEach(counter=>{

    const text = counter.textContent;

    const number = parseInt(text);

    if(isNaN(number)) return;

    gsap.fromTo(counter,

    {

        value:0

    },

    {

        value:number,

        duration:2,

        ease:"power2.out",

        snap:{value:1},

        scrollTrigger:{

            trigger:counter,

            start:"top 85%"

        },

        onUpdate:function(){

            counter.innerHTML=Math.floor(this.targets()[0].value)+"+";

        }

    });

});

/*==================================================
SMOOTH ANCHOR SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(

            anchor.getAttribute("href")

        );

        if(target){

            lenis.scrollTo(target,{

                offset:-70,

                duration:1.4

            });

        }

    });

});

/*==================================================
PAGE TRANSITION
==================================================*/

document.querySelectorAll("a").forEach(link=>{

    const href=link.getAttribute("href");

    if(

        href &&

        !href.startsWith("#") &&

        !href.startsWith("mailto") &&

        !href.startsWith("http")

    ){

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            gsap.to("body",{

                opacity:0,

                duration:.35,

                ease:"power2.out",

                onComplete(){

                    window.location.href=href;

                }

            });

        });

    }

});

/*==================================================
WINDOW FOCUS
==================================================*/

window.addEventListener("pageshow",()=>{

    gsap.to("body",{

        opacity:1,

        duration:.5

    });

});

/*==================================================
REFRESH SCROLLTRIGGER
==================================================*/

window.addEventListener("load",()=>{

    ScrollTrigger.refresh();

});

/*==================================================
CONSOLE
==================================================*/

console.log(

"%c🚀 Portfolio V3 Loaded Successfully",

"color:#00ff99;font-size:16px;font-weight:bold;"

);
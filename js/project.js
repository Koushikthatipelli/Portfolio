/*==================================================
            ROADMAP.IO
            SCRIPT.JS
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
            LOADER
==================================================*/

window.addEventListener("load",()=>{

    const tl=gsap.timeline();

    tl.to(".loader h1",{

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

    .from("#header",{

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

    .from(".mockup-wrapper",{

        scale:.9,

        opacity:0,

        duration:1

    },"-=.7")

    .from(".floating-card",{

        x:60,

        opacity:0,

        stagger:.15,

        duration:.8

    },"-=.8");

});

/*==================================================
            LENIS
==================================================*/

const lenis=new Lenis({

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

lenis.on("scroll",ScrollTrigger.update);

gsap.ticker.add((time)=>{

    lenis.raf(time*1000);

});

gsap.ticker.lagSmoothing(0);

/*==================================================
            PROGRESS BAR
==================================================*/

const progress = document.querySelector(".progress-bar span");

if (progress) {
    lenis.on("scroll", ({ scroll }) => {
        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        progress.style.width =
            (scroll / pageHeight) * 100 + "%";
    });
}

/*==================================================
            CUSTOM CURSOR
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

document.querySelectorAll(

"a,button,.feature-card,.overview-card,.gallery-item,.tech-item,.timeline-item,.challenge-card,.stat-box"

).forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        gsap.to(cursor,{

            width:56,

            height:56,

            border:"2px solid #fff",

            background:"transparent",

            duration:.25

        });

    });

    item.addEventListener("mouseleave",()=>{

        gsap.to(cursor,{

            width:18,

            height:18,

            border:"0px solid transparent",

            background:"#fff",

            duration:.25

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

gsap.to(".hero-right",{

    y:-70,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

gsap.to(".mockup-wrapper",{

    y:-50,

    scale:.92,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

/*==================================================
FLOATING CARDS
==================================================*/

gsap.to(".card-one",{

    y:-18,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});

gsap.to(".card-two",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:2.6,

    delay:.3,

    ease:"sine.inOut"

});

gsap.to(".card-three",{

    y:-20,

    repeat:-1,

    yoyo:true,

    duration:3.2,

    delay:.5,

    ease:"sine.inOut"

});

/*==================================================
SECTION REVEALS
==================================================*/

gsap.utils.toArray(".section-header").forEach(section=>{

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
OVERVIEW CARDS
==================================================*/

gsap.from(".overview-card",{

    y:70,

    opacity:0,

    stagger:.15,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".overview-grid",

        start:"top 82%"

    }

});

/*==================================================
FEATURE CARDS
==================================================*/

gsap.from(".feature-card",{

    y:90,

    opacity:0,

    stagger:.12,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".features-grid",

        start:"top 82%"

    }

});

/*==================================================
GALLERY
==================================================*/

gsap.from(".gallery-item",{

    y:100,

    opacity:0,

    stagger:.2,

    duration:.9,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".gallery-wrapper",

        start:"top 82%"

    }

});
/*==================================================
            TECH STACK
==================================================*/

gsap.from(".tech-item",{

    y:80,

    opacity:0,

    stagger:.12,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".tech-grid",

        start:"top 82%"

    }

});

/*==================================================
            TIMELINE
==================================================*/

gsap.from(".timeline-item",{

    y:90,

    opacity:0,

    stagger:.18,

    duration:.9,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".timeline-wrapper",

        start:"top 80%"

    }

});

/*==================================================
            STATS COUNTER
==================================================*/

document.querySelectorAll(".stat-box h2").forEach(counter=>{

    const text=counter.innerText;

    const number=parseInt(text);

    if(isNaN(number)) return;

    gsap.fromTo(counter,{

        value:0

    },{

        value:number,

        duration:2,

        snap:{value:1},

        ease:"power2.out",

        scrollTrigger:{

            trigger:counter,

            start:"top 85%"

        },

        onUpdate:function(){

            if(text.includes("%")){

                counter.innerHTML=

                Math.floor(this.targets()[0].value)+"%";

            }

            else if(text.includes("+")){

                counter.innerHTML=

                Math.floor(this.targets()[0].value)+"+";

            }

            else{

                counter.innerHTML=

                Math.floor(this.targets()[0].value);

            }

        }

    });

});

/*==================================================
            CHALLENGE CARDS
==================================================*/

gsap.from(".challenge-card",{

    y:90,

    opacity:0,

    stagger:.15,

    duration:.8,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".challenge-grid",

        start:"top 82%"

    }

});

/*==================================================
            CTA
==================================================*/

gsap.from(".cta-content",{

    scale:.95,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".cta",

        start:"top 82%"

    }

});
/*==================================================
            MAGNETIC BUTTONS
==================================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.back-btn"

).forEach(button=>{

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

document.querySelectorAll(

".feature-card,.overview-card,.gallery-item,.tech-item,.timeline-item,.challenge-card,.stat-box"

).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-.5)*10;

        const rotateX=((y/rect.height)-.5)*-10;

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
            IMAGE PARALLAX
==================================================*/

gsap.utils.toArray(".gallery-item img").forEach(image=>{

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
            NAVBAR BLUR
==================================================*/

const header=document.querySelector("#header");

lenis.on("scroll",({scroll})=>{

    if(scroll>60){

        gsap.to(header,{

            background:"rgba(5,5,5,.72)",

            backdropFilter:"blur(18px)",

            borderBottom:"1px solid rgba(255,255,255,.08)",

            duration:.3

        });

    }

    else{

        gsap.to(header,{

            background:"transparent",

            backdropFilter:"blur(0px)",

            borderBottom:"1px solid transparent",

            duration:.3

        });

    }

});

/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(

            anchor.getAttribute("href")

        );

        if(target){

            lenis.scrollTo(target,{

                offset:-80,

                duration:1.4

            });

        }

    });

});

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

sections.forEach(section=>{

    ScrollTrigger.create({

        trigger:section,

        start:"top center",

        end:"bottom center",

        onEnter:()=>setActive(section.id),

        onEnterBack:()=>setActive(section.id)

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
            REFRESH
==================================================*/

window.addEventListener("load",()=>{

    ScrollTrigger.refresh();

});

/*==================================================
            READY
==================================================*/

console.log(

"%c🚀 Roadmap.io Loaded Successfully",

"color:#00ff99;font-size:16px;font-weight:bold;"

);
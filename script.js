
gsap.registerPlugin(ScrollTrigger);
var cr = document.querySelector(".corsur")
var blur = document.querySelector(".carsur-blur")
var tilt = document.querySelectorAll("#card")
document.addEventListener("mousemove", function (dets) {
  cr.style.left = dets.x + 13 + "px"
  cr.style.top = dets.y + 5 + "px"
  cr.style.duration = 5
  blur.style.left = dets.x + "px"
  blur.style.top = dets.y + "px"
  
});

function nav() {
  gsap.to("#nav-main", {
    backgroundColor: "#000",
    height: "12vh",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#nav-main",
      scroller: "body",
      //   markers:true, 
      start: "top -19%",
      end: "top -21%",
      duration: 1,
      scrub: 2
    }
    
    
  });
}
nav();
function backgroundcolor() {
  gsap.to(".main", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
      trigger: ".main",
      scroll: "#page1",
      // markers:true,
      start: "top -20%",
      end: "top -70%",
      
      scrub: 2
    }
  })
};
backgroundcolor();

function vtilt() {
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
  })
}
vtilt();

function swipar() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 3000, // Delay between transitions in milliseconds
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}
swipar();
function green() {
  gsap.from("#about,#image1,#abut-contant,#image2", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#abut-contant",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    }
  });
}
green();

function holl() {
  var h4all = document.querySelectorAll("#about #image1 img, #about #image2 img, nav h1,.page5 .elem, footer #f2, #f3, #f4");
  h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      cr.style.scale = 4;
      cr.style.border = "1px solid #fff";
      cr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
      cr.style.scale = 1;
      cr.style.border = "0px solid #95C11E";
      cr.style.backgroundColor = "#95C11E";
    });
  });
};
holl();

function cardContenar() {
  gsap.from(".card1", {
    x: -500,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: ".card-contenar",
      scroller: "body",
      // markers:true,
      start: "top 30%",
      end: "top 50%",
      scrub: 1,
    }
  });
  gsap.from(".card2", {
    y: 200,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: ".card-contenar",
      scroller: "body",
      // markers:true,
      start: "top 30%",
      end: "top 50%",
      scrub: 1,
    }
  });
  gsap.from(".card3", {
    x: 200,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: ".card-contenar",
      scroller: "body",
      // markers:true,
      start: "top 30%",
      end: "top 50%",
      scrub: 1,
    }
  });
  
};
cardContenar();
function colan() {
  gsap.from(".colan-laft", {
    y: -70,
    x: -70,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".colan-laft",
      scroller: "body",
      // markers:true,
      start: "top 40%",
      end: "top 60%",
      scrub: 1,
    }
  })
  
  gsap.from(".colan-right", {
    y: 70,
    x: 70,
    opacity: 0,
    duration: 1,
    // delay:0.5,
    scrollTrigger: {
      trigger: ".colan-laft",
      scroller: "body",
      // markers:true,
      start: "top 40%",
      end: "top 55%",
      scrub: 1,
    }
  })
};
colan();


function page5ani(){
  gsap.from(".page5 h1", {
    y: 50,
    opacity:0,
    scrollTrigger: {
      trigger: ".page5 h1",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page5ani();


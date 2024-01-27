// custom cursor animation
var crsorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dots) {
  crsorBlur.style.left = dots.x - 200 + "px";
  crsorBlur.style.top = dots.y - 200 + "px";
});

// accordion script 
const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);

  function collapseAccordions() {
    const activeAccordion = document.querySelector(".active");
    if (activeAccordion && activeAccordion !== accordion) {
      activeAccordion.classList.toggle("active");
      activeAccordion.nextElementSibling.style.maxHeight = 0;
    }
    accordion.classList.toggle("active");
    const accordionItemBody = accordion.nextElementSibling;

    if (accordion.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  }
});

// slider animation automatic
type = "text/javascript";
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2500);

// animation upon scrolling to navbar
gsap.to(".nav", {
  backgroundColor: "#1e1e1e",
  height: "90px",
  duration: 0.75,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers : true,
    start: "top -8%",
    end: "top -11%",
    scrub: 1,
  },
});

// animation to main container upon scrolling
gsap.to(".main", {
  backgroundColor: "#1e1e1e",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// animation to about us page upon scrolling
gsap.from(".about-us-in, .about-us img", {
  y: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// animation to faqs upon scrolling
gsap.from(".faqs h1",{
  y:50,
  scrollTrigger: {
    trigger: ".faqs h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
})

// animating footer upon scrolling
gsap.from("footer",{
  y:200,
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    start: "top 80%",
    end: "top 80%",
    scrub: 2,
  },
}) 

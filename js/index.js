
const cursor = document.querySelector("#cursor");

let mouse = { x: -100, y: -100 }; // place it outside
let pos = { x: 0, y: 0 };
const speed = 0.1;

const updateCoordinates = (e) => {
   mouse.x = e.clientX;
   mouse.y = e.clientY;
};

window.addEventListener("mousemove", updateCoordinates);

const updatePosition = () => {
   pos.x += (mouse.x - pos.x) * speed;
   pos.y += (mouse.y - pos.y) * speed;
   cursor.style.transform =
      "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
};

function loop() {
   updatePosition();
   requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll("[cursor-class]");



const workItem = document.querySelectorAll(".work-item")

workItem.forEach((item) => {
   item.addEventListener('mouseenter', function () {
      cursor.classList.add("active");

   })
   item.addEventListener('mouseleave', function () {
      cursor.classList.remove("active");

   })
})













ScrollReveal({
   distance: '100px',
   duration: 2700,
   delay: 100,
   reset: false,
});
ScrollReveal().reveal(".general-text h1", { delay: 1300, origin: "left", interval: 200 });
ScrollReveal().reveal(".general-text p", { delay: 2400, origin: "right" });
ScrollReveal().reveal(".general-button", { delay: 2700, origin: "bottom" });
ScrollReveal().reveal(".about-text h2", { delay: 100, origin: "right" });
ScrollReveal().reveal(".about-text p", { delay: 100, interval: 300, origin: "right" });
ScrollReveal().reveal(".about-text .hover-link", { delay: 100, origin: "right" });
ScrollReveal().reveal(".portfolio-title h2, section-title", { delay: 100, origin: "top" });












var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();


tl.from('.work-item-1 .work-text', 10, { x: 200, opacity: 0 });
tl.from('.work-item-2 .work-text', 10, { x: -200, opacity: 0 });
tl.from('.work-item-3 .work-text', 10, { x: -300, opacity: 0 });
tl.from('.work-item-4 .work-text', 10, { x: 200, opacity: 0 });
tl.from('.work-item-4 .container', 10, { y: -200, opacity: 0 });
// tl.from('.work-text', 1, { width: 0 }, "=-1");
// tl.from('.work-item', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
// tl.from('.work-item-4 .work-text', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

// tl2.from(".work-item", 1, { opacity: 0, scale: 0 });
// tl2.to(".work-item", .5, { left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' })

const scene = new ScrollMagic.Scene({
   triggerElement: ".section-work",
   triggerHook: "onLeave",
   duration: "200%"
})
   .setPin(".section-work")
   .setTween(tl)
   .addTo(controller);

const scene2 = new ScrollMagic.Scene({
   triggerElement: ".section-work"
})
   .setTween(tl2)
   .addTo(controller);


function updatePercentage() {
   percent.innerHTML = (tl.progress() * 100).toFixed();
   tl.progress();
}







const swiper = new Swiper('.portfolio-container', {
   spaceBetween: 20,
   slidesPerView: 1,
   loop: true,
   // Navigation arrows
   effect: "fade",
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
});






const headerLinks = document.querySelectorAll('.header-link')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.header-nav')
burger.addEventListener('click', () => {
   nav.classList.toggle('active')
   burger.classList.toggle('active')
})

headerLinks.forEach(el => {
   el.addEventListener('click', function () {
      burger.classList.remove('active')
      nav.classList.remove('active')

   })
})
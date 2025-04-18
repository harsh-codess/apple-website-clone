function loco(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1.2",
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
      keyboard: true,
      loop:true
});


var menu = document.querySelector(".ri-menu-line");
var close = document.querySelector(".ri-close-line");
var navbar = document.querySelector(".subnav");

menu.addEventListener("click",function(){
  navbar.style.top="0%";
})

close.addEventListener("click",function(){
  navbar.style.top="-109%";
})


var Store = document.querySelector("#Store");
var hovermenu = document.querySelector(".nav3");

Store.addEventListener("mousemove",function(){
  hovermenu.style.top="5%";
})

Store.addEventListener("mouseleave",function(){
  hovermenu.style.top="-100%";
})

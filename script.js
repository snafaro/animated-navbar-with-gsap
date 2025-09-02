const tl = gsap.timeline();
const nav = document.querySelector("#full");
const openBtn = document.querySelector("#nav i");
const closeBtn = document.querySelector("#full i");

tl.to(nav,{
    right: 0,
    duration: .7
})

tl.from("#full h4",{
    x: 100,
    duration: .5,
    stagger: .2,
    opacity: 0
})

tl.pause();

openBtn.addEventListener("click",()=>{
    tl.play();
})
closeBtn.addEventListener("click",()=>{
    tl.reverse();
})
import { gsap } from "gsap";




function heroAnimation(){
    var tl = gsap.timeline ();

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
    // desktop setup code here...
    tl.from("#hero-text",{duration:1.25,x:-200, alpha: 0})
    .from("button",{duration:1.5,y:100, alpha: 0} ,"-0.25" )
    .from("h2",{duration:1.5,x:-200, alpha: 0} ,"-0.25" )
    });

    mm.add("(max-width: 767px)", () => {
    // mobile setup code here...
    tl.from("#hero-text",{duration:1.25,y:-200, alpha: 0})
    .from("button",{duration:1.5,y:100, alpha: 0} ,"-0.25" )
    .from("h2",{duration:1.5,y:-200, alpha: 0} ,"-0.25" )
    });





    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation);





let button = document.querySelector("button");

var buttonTL=gsap.timeline({paused:true})
buttonTL.to("button",{
    duration: 1,
    scale: 1.3
});

button.addEventListener("mouseenter",function () {
buttonTL.play();
})

button.addEventListener("mouseleave",function() {
buttonTL.reverse();
});
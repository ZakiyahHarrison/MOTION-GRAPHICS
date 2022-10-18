import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function section1Animation (){
   var tl = gsap.timeline({scrollTrigger:{trigger:"#pic1", scrub: true, markers: false, end:"top 20%", start: "top 70%" }}); 
   tl.from("#pic1",{duration:1, x:-300, alpha:0});

   return tl;
}







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
mainTL.add(heroAnimation)
.add(section1Animation);






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
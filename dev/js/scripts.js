import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function section1Animation (){
   var tl = gsap.timeline({scrollTrigger:{trigger:"#section-1-content", scrub: true, markers: false, end:"top 40%", start: "top 70%" }}); 
   tl.from("aside",{ duration:5, x:-300, alpha:0});
   tl.from("#text1",{duration:5, x:50, alpha:0});

   return tl;
}

function section2Animation (){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#section2", scrub: true, markers: true, end:"top 10%", start: "top 60%" }}); 
    tl.from("#gallery1",{duration:10, y:-800, alpha:0});
    tl.from("#gallery2",{duration:10, x:800, alpha:0});
    tl.from("#gallery3",{duration:10, x:-800, alpha:0});
    tl.from("#gallery4",{duration:10, y:800, alpha:0});
 
    return tl;
}


function section3Animation (){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#section-3-content", scrub: true, markers: false, end:"top 40%", start: "top 70%" }}); 
   // tl.from("aside",{duration:5, alpha:0});
    tl.from("#text2",{duration:5, x:50, alpha:0});

 
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


function vinesectionAnimation (){
    var tl= gsap.timeline({scrollTrigger:{trigger:"#vines", scrub: true, markers: false, end:"bottom 80%", start: "top 30%" }});
    tl.from("#bg-img", {duration:10, clipPath:"inset(0 50%)"})
    return tl;
}




var mainTL = gsap.timeline();
mainTL.add(heroAnimation())
.add(section1Animation())
.add(section2Animation())
.add(section3Animation())
.add(vinesectionAnimation());



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
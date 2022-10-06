
import { gsap } from "gsap";
gsap.set("#trails-btn i",{transformOrigin:"center bottom"});


function heroanimation(){
    var tl =gsap.timeline();
    tl.from("#first-line",{duration: 1, alpha:0, y:-100})
        .from("#second-line",{duration: 1, alpha:0, y:-70})
        .from("#trails-btn",{duration: 1, alpha:0, y:50})
        .from("#trails-btn i",{duration: 1, alpha:0, rotation:180});
    return tl;
}


var maintl=gsap.timeline();
maintl.add(heroanimation());

var herosizenumber = 1;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...
  herosizenumber = 2;
});

mm.add("(max-width: 767px)", () => {
  // mobile setup code here...
  herosizenumber = 1.25;
});

let trailBtn = document.querySelector("#trails-btn");

var buttonanimation = gsap.timeline({paused:true});
buttonanimation.to("#trails-btn",{duration:1, scale:herosizenumber},"goaway")
    .to("#trails-btn i",{duration: 1, rotateY:180})
    .to("#first-line",{duration: 1, alpha:0, y:50},"goaway")
    .to("#second-line",{duration: 1, alpha:0, y:20},"goaway");


trailBtn.addEventListener("mouseout",function(){
   buttonanimation.reverse();
})

trailBtn.addEventListener("mouseover",function(){
    buttonanimation.play();
 })
 // gsap.to("#trails-btn",{duration:1, scale:1});

    // gsap.to("#trails-btn i",{duration: 1, rotateY:0});

    // gsap.to("#first-line",{duration: 1, alpha:1, y:0});
    // gsap.to("#second-line",{duration: 1, alpha:1, y:0});
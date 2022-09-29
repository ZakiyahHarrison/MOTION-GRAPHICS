import { gsap } from "gsap";

gsap.set("trails-btn i",{transformOrigin:"center bottom"});

gsap.from("#first-line",{duration:2, alpha:0, y:-100});
gsap.from("#second-line",{duration:2, alpha:0, y:-70, delay:.50});
gsap.from("#trails-btn",{duration:2, alpha:0, y:50, delay:.75});
gsap.from("#trails-btn i",{duration:2, alpha:0, rotation:180, delay:.75});

let trailBtn= document.querySelector("trails-btn");



("mouseover",function);
    gsap.to("#trails-btn",{duration:1,scale:2})

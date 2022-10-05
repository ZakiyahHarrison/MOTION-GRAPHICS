import { gsap } from "gsap";

gsap.set("form",{scaleX: 0, transformOrigin:"left center"});
gsap.from("#hero-text",{duration:1,x:-100,alpha:0});
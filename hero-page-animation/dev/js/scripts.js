import { gsap } from "gsap";

gsap.set("form",{scaleX: 0, transformOrigin:"left center"});
gsap.from(".hero-text",{duration:1,y:100});
gsap.from(".btn",{duration:1,x:100});
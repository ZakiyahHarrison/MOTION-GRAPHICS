import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){
    var tl = gsap.timeline()
    tl.from("#face",{duration:1.5, scale:0})
    .fromTo("#circle",{drawSVG:"100% 100%"},{duration:2, drawSVG:"100% 0%"},"drawOutline")
    .from("#righteye",{scale:0, duration:0.45, drawSVG: 0})
    .from("#lefteye",{scale:0, duration:0.25},"-=50%")
    .from("#smile",{duration:1.5, drawSVG:"0%"})
   return tl;
}



function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".green",{duration:0.50, rotate:180, drawSVG:0, stagger: 0.25, transformOrigin: "center"}, "playPattern"  )
    tl.from(".lime",{duration:0.90, rotate:180, drawSVG:0, stagger: 0.25, transformOrigin: "center"}, "playPattern" )
    tl.from(".blue",{duration:0.6, rotate:180, drawSVG:0, transformOrigin: "center"}, "playPattern" )
    tl.from(".blue2",{duration:0.6, rotate:-180, drawSVG:0, transformOrigin: "center"}, "playPattern" )
    return tl;
}

function UIMotion(){
    var tl = gsap.timeline ()
    tl.fromTo("#outline",{drawSVG:"100% 100%"},{duration:2, drawSVG:"100% 0%"},"drawOutline")
    .from("#box",{duration:5, scaleX:0})
    .from("#line",{duration:3, drawSVG:"0%"})
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion());

GSDevTools.create();
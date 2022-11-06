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
    var tl = gsap.timeline({repeatDelay:2,repeat:2})
    tl.from(".green",{duration:0.50, rotate:180, drawSVG:0, stagger: 0.25, transformOrigin: "center"}, "playPattern"  )
    tl.from(".lime",{duration:0.90, rotate:180, drawSVG:0, stagger: 0.25, transformOrigin: "center"}, "playPattern" )
    tl.from(".blue",{duration:0.6, rotate:180, drawSVG:0, transformOrigin: "center"}, "playPattern" )
    tl.from(".blue2",{duration:0.6, rotate:-180, drawSVG:0, transformOrigin: "center"}, "playPattern" )
    return tl;
}



function UIMotion(){
    var tl = gsap.timeline ()
    tl.fromTo("#blue",{drawSVG:"75% 75%"},{duration:4, drawSVG:"100%"},"drawOutline")
    tl.fromTo("#red",{drawSVG:"15% 15%"},{duration:5.5, drawSVG:"100%"},"drawOutline")
    tl.fromTo("#purple",{drawSVG:"45% 45%"},{duration:2.5, drawSVG:"100%"},"drawOutline")
    tl.from("#dot3",{opacity:0, yoyo:true, duration:1, reversed:true})
    tl.from("#dot2",{opacity:0, yoyo:true, duration:1, reversed:true})
    tl.from("#dot1",{opacity:0, yoyo:true, duration:1, reversed:true})
    return tl;
}

function dataMotion(){
var tl = gsap.timeline({repeat:2})
tl.from("#dot3",{opacity:0, yoyo:true, duration:1, reversed:true})
    .from("#dot2",{opacity:0, yoyo:true, duration:1, reversed:true})
    .from("#dot1",{opacity:0, yoyo:true, duration:1, reversed:true})
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(dataMotion())
.add(UIMotion());

GSDevTools.create();
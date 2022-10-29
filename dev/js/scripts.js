import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
    var tl = gsap.timeline ()
    return tl;
}

function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".odd",{duration:0.5, rotate:180, drawSVG:0, stagger: 0.25, transformOrigin: "center"} )
    tl.from(".even",{duration:0.5, rotate:180, drawSVG:0, stagger: 0.25, transformOrigin: "center"} )
    return tl;
}

function UIMotion(){
    var tl = gsap.timeline ()
    tl.to("#pencil",{duration:1, drawSVG:0},"drawIN")
    .from("#bottom-line",{duration:1, drawSVG:0},"drawIN")
    .to("#pencil",{duration:0.25, alpha:0},"drawOutline")
    .fromTo("#outline",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"},"drawOutline")
    .from("#box-bg",{duration:0.5, scaleX:0})
    .from(".letter",{duration:0.25, alpha:0, y:20, stagger: 0.12},"-=50%")
    .from("#glass",{duration:0.25, drawSVG:0},"-=.5")
    .from("#handle",{duration:0.25, drawSVG:0},"-=.25")
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion());

GSDevTools.create();
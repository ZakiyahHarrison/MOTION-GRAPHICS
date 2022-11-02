import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){

    // make a var that represents the line in the SVG
    var line = document.querySelector("#center-line");
    // make a var that uses the svg line var from above and sets the BBox property
    line = line.getBBox();
    // print out the width of the line. This should make your Figma file
   //  console.log(line.width)

    var leftBall = document.querySelector("#left-ball");
    leftBall = leftBall.getBBox();

    var center = document.querySelector("#center");
    center = center.getBBox();
    // console.log(center.height)

    gsap.set("#left-ball",{x:line.width / 2 + leftBall.width / 2, transformOrigin:"center" })
    gsap.set("#right-ball",{x:-line.width/2 - leftBall.width / 2, transformOrigin:"center" })


   var tl = gsap.timeline()
   tl.from("#right-ball",{scale:0, duration:0.25, drawSVG: 0})
     .from("#left-ball",{scale:0, duration:0.25},"-=50%")
     .to("#right-ball",{x:0, duration:0.25},"rollOut")
     .to("#left-ball",{x:0, duration:0.25},"rollOut")
     .fromTo("#center-line",{drawSVG:"50% 50%"},{duration:0.25, drawSVG: "0% 100%"},"rollOut")
     .from("#center",{duration: 0.25, scale:0, transformOrigin:"center"},"-=50%")
     .to("#center",{duration: 0.25, y: -center.height / 2 - 50},"-=50%")
     .to("#center",{duration: 0.15, y: 0})
     .fromTo("#center-outline",{drawSVG:"100% 50%"},{duration:0.15,drawSVG:"125% 25%"},"-=50%")

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
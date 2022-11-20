import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function mapAnimation(){
        var tl = gsap.timeline();
        tl.fromTo("#map",{duration:0.25, drawSVG: "0% 10%"}, {drawSVG:"90% 100%", ease:"none"})

        return tl;
}


var mainTL = gsap.timeline();
mainTL.add(mapAnimation())



GSDevTools.create();
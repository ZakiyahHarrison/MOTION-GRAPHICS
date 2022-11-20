import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function mapAnimation1(){
        var tl = gsap.timeline()
        tl.fromTo("#line6",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        .fromTo("#line4",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        .fromTo("#line2",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        return tl;
}

function mapAnimation2(){
        var tl = gsap.timeline()
        tl.fromTo("#line3",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        .fromTo("#line1",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        .fromTo("#line5",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        .fromTo("#line7",{drawSVG:"100% 100%"},{duration:1, drawSVG:"100% 0%"})
        return tl;
}

function tflAnimation(){
        var tl = gsap.timeline()
        tl.fromTo("#L",{drawSVG:"100% 100%"},{duration:.5, drawSVG:"100% 0%"})
        .fromTo("#T1",{drawSVG:"100% 100%"},{duration:.5, drawSVG:"100% 0%"})
        .fromTo("#T2",{drawSVG:"100% 100%"},{duration:.5, drawSVG:"100% 0%"})
        .fromTo("#F1",{drawSVG:"100% 100%"},{duration:.5, drawSVG:"100% 0%"})
        .fromTo("#F2",{drawSVG:"100% 100%"},{duration:.5, drawSVG:"100% 0%"})
        .fromTo("#F3",{drawSVG:"100% 100%"},{duration:.5, drawSVG:"100% 0%"})
        return tl;
}

function mapAnimation3(){
        var tl = gsap.timeline()
        tl.to("#line1",{opacity:0})
        .to("#line2",{opacity:0})
        .to("#line3",{opacity:0})
        .to("#line4",{opacity:0})
        .to("#line5",{opacity:0})
        .to("#line6",{opacity:0})
        .to("#L",{opacity:0})
        .to("#T1",{opacity:0})
        .to("#T2",{opacity:0})
        .to("#F3",{opacity:0})
        .to("#F2",{opacity:0})
        return tl;
}

function roundelAnimation(){
        var tl = gsap.timeline()
        tl.to("#F1", {duration: 1, morphSVG:"#bar"})

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(mapAnimation1(),"do")
        .add(mapAnimation2(),"do")
.add(tflAnimation())
.add(mapAnimation3())
.add(roundelAnimation());


GSDevTools.create();
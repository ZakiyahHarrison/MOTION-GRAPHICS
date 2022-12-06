import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function mapAnimation1(){
        var tl = gsap.timeline()
        tl.fromTo("#line6",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        .fromTo("#line4",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        .fromTo("#line2",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        return tl;
}

function mapAnimation2(){
        var tl = gsap.timeline()
        tl.fromTo("#line3",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        .fromTo("#line1",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        .fromTo("#line5",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        .fromTo("#line7",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"})
        return tl;
}

function tflAnimation(){
        var tl = gsap.timeline()
        tl.fromTo("#L",{drawSVG:"100% 100%"},{duration:0.75, drawSVG:"100% 0%"},"sametime")
        .fromTo("#T1",{drawSVG:"100% 100%", alpha:0},{duration:0.75, drawSVG:"100% 0%", alpha:1},"sametime")
        .fromTo("#T2",{drawSVG:"100% 100%"},{duration:0.75, drawSVG:"100% 0%"},"sametime")
        .fromTo("#F1",{drawSVG:"100% 100%", alpha:0},{duration:0.75, drawSVG:"100% 0%", alpha:1},"sametime")
        .fromTo("#F2",{drawSVG:"100% 100%"},{duration:0.75, drawSVG:"100% 0%"},"sametime")
        .fromTo("#F3",{drawSVG:"100% 100%"},{duration:0.75, drawSVG:"100% 0%"},"sametime")
        return tl;
}

function mapAnimation3(){
        var tl = gsap.timeline()
        tl.to("#line1",{opacity:0},"sametime")
        .to("#line2",{opacity:0},"sametime")
        .to("#line3",{opacity:0},"sametime")
        .to("#line4",{opacity:0},"sametime")
        .to("#line5",{opacity:0},"sametime")
        .to("#line6",{opacity:0},"sametime")
        .to("#L",{duration:0.25, opacity:0},"same")
        .to("#T1",{duration:0.25, opacity:0},"same")
        .to("#T2",{duration:0.25, opacity:0},"same")
        .to("#F3",{duration:0.25, opacity:0},"same")
        .to("#F2",{duration:0.25, opacity:0},"same")
        return tl;
}

function roundelAnimation(){
        var tl = gsap.timeline()
        tl.to("#F1", {duration: .5, scaleX:4.20, scaleY:2.06, transformOrigin:"center"},"same")
        .to("#F1",{duration:0.25, x:390, y:-290},"same")
        .to("#F1",{rotate:270})
        .from("#round",{duration:0.0001,alpha:0})
        .from("#round",{duration:1,drawSVG:0})


        return tl;
}

function busAnimation(){
        var tl = gsap.timeline()
        tl.fromTo("#bus",{duration:1, x:4500},{x:-4700,duration:2, ease:"none"},"same")

        .to("#round",{alpha:0,duration:.001},"-=1")
        .to("#F1",{alpha:0,duration:.001},"-=1")

        .from("#text",{alpha:0,x:10,duration:.001},"-=1")
        
        .to("#wheel1",{duration:1, rotate:-360, transformOrigin:"center",repeat:2, ease:1},"same")
        .to("#wheel2",{duration:1, rotate:-360, transformOrigin:"center",repeat:2, ease:1},"same")

        return tl;
}



var mainTL = gsap.timeline();
mainTL.add(mapAnimation1(),"do")
        .add(mapAnimation2(),"do")
.add(tflAnimation())
.add(mapAnimation3())
.add(roundelAnimation())
.add(busAnimation(),"same");


GSDevTools.create();
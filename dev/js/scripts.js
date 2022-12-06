import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);



function dotsAnimation(){
        var tl = gsap.timeline ({})
        
        tl.from ("#dot1",{opacity:0,duration:0.10},"appear")

        .from ("#dot3",{opacity:0,duration:0.10},"appear1")
        .from ("#dot19",{opacity:0,duration:0.10},"appear1")

        .from ("#dot12",{opacity:0,duration:0.10},"appear2")

        .from ("#dot17",{opacity:0,duration:0.10},"appear3")
        .from ("#dot18",{opacity:0,duration:0.10},"appear3")
        .from ("#dot9",{opacity:0,duration:0.10},"appear3")
        .from ("#dot10i ",{opacity:0,duration:0.10},"appear3")

        .from ("#dot7",{opacity:0,duration:0.10},"appear4")
        .from ("#dot13",{opacity:0,duration:0.10},"appear4")
        .from ("#dot14",{opacity:0,duration:0.10},"appear4")
        .from ("#dot15",{opacity:0,duration:0.10},"appear4")
        .from ("#dot4",{opacity:0,duration:0.10},"appear4")

        .from ("#dot2",{opacity:0,duration:0.10},"appear4.5")
        .from ("#dot8",{opacity:0,duration:0.10},"appear4.5")

        .to ("#dot6",{alpha:0,duration:0.10},"appear5")
        .to ("#dot11",{alpha:0,duration:0.10},"appear5")

        .to ("#dot1",{fillOpacity:.25,duration:0.10},"appear")

        .to ("#dot3",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot19",{fillOpacity:.25,duration:0.10},"appear")

        .to ("#dot12",{fillOpacity:.25,duration:0.10},"appear")

        .to ("#dot17",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot18",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot9",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot10i ",{fillOpacity:.25,duration:0.10},"appear")

        .to ("#dot7",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot13",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot14",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot15",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot4",{fillOpacity:.25,duration:0.10},"appear")

        .to ("#dot2",{fillOpacity:.25,duration:0.10},"appear")
        .to ("#dot8",{fillOpacity:.25,duration:0.10},"appear")

        .from("#dot2",{fillOpacity:1,duration:0.10},"appear1")
        .from("#dot4",{fillOpacity:1,duration:0.10},"appear1")

        .from ("#dot6",{opacity:0,duration:0.10},"appear3")
        .from ("#dot11",{opacity:0,duration:0.10},"appear3")

        .from ("#dot21",{alpha:0,duration:0.10},"start")
        .from ("#dot16",{alpha:0,duration:0.10},"start")

        .from("#dot7",{fillOpacity:1,duration:0.10},"appear2")
        .from("#dot17",{fillOpacity:1,duration:0.10},"appear2")
        

        .to ("#dot2",{opacity:0,duration:0.10},"disappear1")   
        .to ("#dot4",{opacity:0,duration:0.10},"disappear1")

        .to ("#dot7",{opacity:0,duration:0.10},"disappear2")   
        .to ("#dot17",{opacity:0,duration:0.10},"disappear2")

        .from ("#dot6",{opacity:0,duration:0.10},"do")
        .from ("#dot11",{opacity:0,duration:0.10},"do")
        .to ("#dot15",{opacity:0,duration:0.10},"do")   

        .to ("#dot18",{opacity:0,duration:0.10},"disappear3")
        
        .to ("#dot12",{opacity:0,duration:0.10},"disappear4")

        .to ("#dot3",{opacity:0,duration:0.10},"disappear5")
        .to ("#dot19",{opacity:0,duration:0.10},"disappear5")

        .to ("#dot16",{opacity:0,duration:0.10},"disappear6")
        .to ("#dot6",{opacity:0,duration:0.10},"disappear6")
        .to ("#dot21",{opacity:0,duration:0.10},"disappear6")

        .to ("#dot1",{opacity:0,duration:0.10},"disappear7")

        .to ("#dot11",{opacity:0,duration:0.10},"disappearfinal")
        .to ("#dot8",{opacity:0,duration:0.10},"disappearfinal")
        .to ("#dot9",{opacity:0,duration:0.10},"disappearfinal")
        .to ("#dot13",{opacity:0,duration:0.10},"disappearfinal")
        .to ("#dot14",{opacity:0,duration:0.10},"disappearfinal")



        return tl;
}

function triangle1Animation(){
        var tl = gsap.timeline () 

        tl.from("#whitetriangle",{scale:0, transformOrigin:"center"})
        .fromTo("#clippath",{x:"-60%",y:"60%"},{x:"0%",y:"0%",duration:.5})
        .fromTo("#blackcircle",{scale:0, transformOrigin:"center"},{scale:0.5},"do")
        .to("#whitetriangle",{scale:0, transformOrigin:"center"},"do")
        .fromTo("#blackcircle",{scale:0.5,transformOrigin:"center"},{fill:"white"},"same")
        .from("#whitesquare",{scale:0, transformOrigin:"center"},"same") 
        .from("#blacktriangle",{scale:0, transformOrigin:"center"},"stuff")
        .to("#blackcircle",{scale:0},"stuff")
       
        return tl;
}

function triangle2Animation(){
var tl = gsap.timeline () 

        tl.from("#triangleline",{scale:0})
        .to("#triangleline",{scaleY:10,transformOrigin:"center"})
        .to("#whitesquare",{x:-500, transformOrigin:"center"},"same") 
        .to("#blacktriangle",{x:-500, transformOrigin:"center"},"same")
        //.to("#triangleline",{x:-500, transformOrigin:"center"},"same")


        return tl;
}

function voritext1Animation(){
        var tl = gsap.timeline ({})
        tl.fromTo("#v",{x:300,opacity:0},{x:10, ease:1,opacity:1},"same")
        .fromTo("#o",{x:400,opacity:0},{x:10.5, ease:1,opacity:1},"same")
        .fromTo("#r",{x:500,opacity:0},{x:11, ease:1,opacity:1},"same")
        .fromTo("#i",{x:600,opacity:0},{x:11.5, ease:1,opacity:1},"same")
        .to("#dot10i",{x:416,fillOpacity:4})

        return tl;
}

function voritext2Animation(){
        var tl = gsap.timeline ({})

        tl.fromTo("#vdraw",{drawSVG:"0%"},{drawSVG:"100%"},"do")
        .fromTo("#i",{drawSVG:"100% 100%"},{drawSVG:"100% 0%"},"do")
        .fromTo("#rdraw",{drawSVG:"0%"},{drawSVG:"100%"},"do")

        return tl;

}

var mainTL = gsap.timeline();
mainTL
.add(dotsAnimation({duration:0.005}),"same")
.add(triangle1Animation(),"same")
.add(triangle2Animation())
.add(voritext1Animation(),"do")
.add(voritext2Animation(),"do");


GSDevTools.create();
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function voridots1Animation(){
        var tl = gsap.timeline ({duration:2})
        tl.from ("#dot1",{opacity:0},"appear")

        .from ("#dot3",{opacity:0},"appear1")
        .from ("#dot19",{opacity:0},"appear1")

        .from ("#dot12",{opacity:0},"appear2")

        .from ("#dot17",{opacity:0},"appear3")
        .from ("#dot18",{opacity:0},"appear3")
        .from ("#dot9",{opacity:0},"appear3")
        .from ("#dot10",{opacity:0},"appear3")

        .from ("#dot7",{opacity:0},"appear4")
        .from ("#dot13",{opacity:0},"appear4")
        .from ("#dot14",{opacity:0},"appear4")
        .from ("#dot15",{opacity:0},"appear4")
        .from ("#dot4",{opacity:0},"appear4")

        .from ("#dot2",{opacity:0},"appear4.5")
        .from ("#dot8",{opacity:0},"appear4.5")

        

        return tl;

}

function voridots2Animation (){
        var tl = gsap.timeline ({duration:2})

        tl.from ("#dot16",{opacity:0},"appear6")

        .from ("#dot6",{opacity:0},"appear5")
        .from ("#dot11",{opacity:0},"appear5")
        
        .from ("#dot21",{opacity:0},"appear6")

        .from ("#dot5",{opacity:0},"appear7")
        

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(voridots1Animation())
.add(voridots2Animation());


GSDevTools.create();
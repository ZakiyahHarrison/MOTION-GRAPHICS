import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function dots1Animation(){
        var tl = gsap.timeline ({duration:2})
        tl.from ("#dot1",{opacity:0},"appear")

        .from ("#dot3",{opacity:0},"appear1")
        .from ("#dot19",{opacity:0},"appear1")

        .from ("#dot12",{opacity:0},"appear2")

        .from ("#dot17",{opacity:0},"appear3")
        .from ("#dot18",{opacity:0},"appear3")
        .from ("#dot9",{opacity:0},"appear3")
        .from ("#dot10i ",{opacity:0},"appear3")

        .from ("#dot7",{opacity:0},"appear4")
        .from ("#dot13",{opacity:0},"appear4")
        .from ("#dot14",{opacity:0},"appear4")
        .from ("#dot15",{opacity:0},"appear4")
        .from ("#dot4",{opacity:0},"appear4")

        .from ("#dot2",{opacity:0},"appear4.5")
        .from ("#dot8",{opacity:0},"appear4.5")

        return tl;
}

function dots1changeAnimation (){
        var tl = gsap.timeline()
        tl.to ("#dot1",{fillOpacity:.25},"appear")

        .to ("#dot3",{fillOpacity:.25},"appear")
        .to ("#dot19",{fillOpacity:.25},"appear")

        .to ("#dot12",{fillOpacity:.25},"appear")

        .to ("#dot17",{fillOpacity:.25},"appear")
        .to ("#dot18",{fillOpacity:.25},"appear")
        .to ("#dot9",{fillOpacity:.25},"appear")
        .to ("#dot10i ",{fillOpacity:.25},"appear")

        .to ("#dot7",{fillOpacity:.25},"appear")
        .to ("#dot13",{fillOpacity:.25},"appear")
        .to ("#dot14",{fillOpacity:.25},"appear")
        .to ("#dot15",{fillOpacity:.25},"appear")
        .to ("#dot4",{fillOpacity:.25},"appear")

        .to ("#dot2",{fillOpacity:.25},"appear")
        .to ("#dot8",{fillOpacity:.25},"appear")

        return tl;
        
}


function dots2Animation (){
        var tl = gsap.timeline ({duration:2})

        tl.from ("#dot6",{opacity:0},"appear5")
        .from ("#dot11",{opacity:0},"appear5")

        .from ("#dot16",{opacity:0},"appear6")
        .from ("#dot21",{opacity:0},"appear6")

        .from ("#dot5",{opacity:0},"appear7")
        

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(dots1Animation())
.add(dots1changeAnimation())
.add(dots2Animation());


GSDevTools.create();
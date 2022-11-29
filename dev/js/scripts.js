import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function voridotsAnimation(){
        var tl = gsap.timeline ()
        tl.from ("#dot1",{opacity:0})
        .from ("#dot2",{})
        .from ("#dot3",{})
        .from ("#dot4",{})
        .from ("#dot5",{})
        .from ("#dot6",{})
        .from ("#dot7",{})
        .from ("#dot8",{})
        .from ("#dot9",{})
        .from ("#dot10",{})
        .from ("#dot11",{})
        .from ("#dot12",{})
        .from ("#dot13",{})
        .from ("#dot14",{})
        .from ("#dot15",{})
        .from ("#dot16",{})
        .from ("#dot17",{})
        .from ("#dot18",{})
        .from ("#dot19",{})

        return tl;

}

var mainTL = gsap.timeline();
mainTL.add(voridotsAnimation());



GSDevTools.create();
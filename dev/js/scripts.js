import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function voridotsAnimation(){
        var tl = gsap.timeline ()
        tl.from ("#dot1",{opacity:1})
        tl.from ("#dot2",{})
        tl.from ("#dot3",{})
        tl.from ("#dot4",{})
        tl.from ("#dot5",{})
        tl.from ("#dot6",{})
        tl.from ("#dot7",{})
        tl.from ("#dot8",{})
        tl.from ("#dot9",{})
        tl.from ("#dot10",{})
        tl.from ("#dot11",{})
        tl.from ("#dot12",{})
        tl.from ("#dot13",{})
        tl.from ("#dot14",{})
        tl.from ("#dot15",{})
        tl.from ("#dot16",{})
        tl.from ("#dot17",{})
        tl.from ("#dot18",{})
        tl.from ("#dot19",{})

}

var mainTL = gsap.timeline();
mainTL.add(voridotsAnimation);



GSDevTools.create();
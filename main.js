import { kenPic, ryuPic, Bg, imageLoad } from "./imageloading.js";
import { Ryu } from "./ryu.js";
import { Ken } from "./ken.js";


const ken = new Ken();
const ryu = new Ryu();


console.log("hello world");

window.onload = function () {
    imageLoad(loadingDone);     
}
function loadingDone(){

    const canvasEl = document.getElementById ("superfighters");
    const graph = canvasEl.getContext ("2d");
    
    function fighterAnimate () {
    
        graph.drawImage (Bg, 0, 0);
        ken.drawKen (kenPic, graph);
        ken.updateKen(kenPic, canvasEl);
        ryu.drawRyu(ryuPic, graph);
        ryu.updateRyu(ryuPic, canvasEl)  
        window.requestAnimationFrame(fighterAnimate);       
    }    
    window.requestAnimationFrame(fighterAnimate);    
}


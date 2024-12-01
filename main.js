import { kenPic, Bg, imageLoad } from "./imageloading.js";
import { Ken } from "./ken.js";


const ken = new Ken();


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
        window.requestAnimationFrame(fighterAnimate);       
    }    
    window.requestAnimationFrame(fighterAnimate);    
}


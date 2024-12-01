import { kenPic, Bg, imageLoad } from "./imageloading.js";
import { updateKen, drawKen} from "./ken.js";


console.log("hello world");

window.onload = function () {
    imageLoad(loadingDone);     
}
function loadingDone(){

    const canvasEl = document.getElementById ("superfighters");
    const graph = canvasEl.getContext ("2d");
    
    function fighterAnimate () {
    
        graph.drawImage (Bg, 0, 0);
        drawKen (kenPic, graph);
        updateKen(kenPic, canvasEl);   
        window.requestAnimationFrame(fighterAnimate);       
    }    
    window.requestAnimationFrame(fighterAnimate);    
}


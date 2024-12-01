import { kenPic, Bg, imageLoad } from "./imageloading.js";

console.log("hello world");
var kenPicx = 0;
var kenSpeed = 1;

window.onload = function () {
    imageLoad(loadingDone);     
}

function loadingDone(){

    const canvasEl = document.getElementById ("superfighters");
    const graph = canvasEl.getContext ("2d");
    
    function fighterAnimate () {
    
        graph.drawImage (Bg, 0, 0);
        kenPicx += kenSpeed;
        if (kenPicx >= canvasEl.width - kenPic.width || kenPicx < 0){
            kenSpeed *= -1;
        }        
        graph.drawImage(kenPic, kenPicx, 115, kenPic.width  , kenPic.height);              
    
        window.requestAnimationFrame(fighterAnimate);       
    }
    
    window.requestAnimationFrame(fighterAnimate);    
}


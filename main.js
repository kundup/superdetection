console.log("hello world");
var kenPicx = 0;


window.onload = function () {
    imageLoad();     
}

function loadingDone(){

    game = document.getElementById("superfighters");
    graph = game.getContext("2d");

    
    function fighterAnimate () {
    
        graph.clearRect(0, 0, game.width, game.height);
        kenPicx += 1;        
        graph.drawImage(kenPic, kenPicx, 0, kenPic.width * 1.5 , kenPic.height * 1.5);              
        window.requestAnimationFrame(fighterAnimate);       
    }
    
    window.requestAnimationFrame(fighterAnimate);
    
}


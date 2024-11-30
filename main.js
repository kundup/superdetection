console.log("hello world");
var kenpic = new Image();
var kenpicx = 0;

window.onload = function () {
    // Canvas öğesini seç ve bağlamı al
    game = document.getElementById("superfighters");
    graph = game.getContext("2d");

    // Resim kaynağını tanımla
    kenpic.src = "images/ken1.png";        


    function animate () {

        graph.clearRect(0, 0, game.width, game.height);
        kenpicx += 1;        
        graph.drawImage(kenpic, kenpicx, 0, kenpic.width * 1.5 , kenpic.height * 1.5);              
        window.requestAnimationFrame(animate);       
    }

    window.requestAnimationFrame(animate);

}

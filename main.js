console.log("hello world");
var kenpic = new Image();

window.onload = function () {
    // Canvas öğesini seç ve bağlamı al
    game = document.getElementById("superfighters");
    graph = game.getContext("2d");

    // Resim kaynağını tanımla
    kenpic.src = "images/ken1.png";

    // Resim yüklendikten sonra çalıştır
    kenpic.onload = function () {

        graph.fillStyle = "yellow";
        graph.fillRect(0, 0, game.width, game.height);

        graph.strokeStyle = "black";
        graph.moveTo(0, 0);
        graph.lineTo(game.width, game.height);
        graph.moveTo(game.width, 0);
        graph.lineTo(0, game.height);
        graph.stroke();

    
        graph.drawImage(kenpic, 0, 0);
    };
};

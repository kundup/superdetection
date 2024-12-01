var kenPicx = 0;
var kenSpeed = 1;

export function updateKen(kenPic, canvasEl) {
    kenPicx += kenSpeed;
    if (kenPicx >= canvasEl.width - kenPic.width || kenPicx < 0){
    kenSpeed *= -1;
    }
}

export function drawKen(kenPic, graph){
    graph.drawImage(kenPic, kenPicx, 115, kenPic.width  , kenPic.height);
}



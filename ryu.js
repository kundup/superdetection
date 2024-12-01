export class Ryu {

    constructor(){
        this.ryuPicx = 300;
        this.ryuSpeed = -1;
    }

    updateRyu(ryuPic,canvasEl) {
        this.ryuPicx += this.ryuSpeed;
        if (this.ryuPicx >= canvasEl.width - ryuPic.width || this.ryuPicx < 0){
        this.ryuSpeed *= -1;
        }
    }
    
    drawRyu(ryuPic, graph){
        graph.drawImage(ryuPic,this.ryuPicx, 110, ryuPic.width  , ryuPic.height);
    }

}



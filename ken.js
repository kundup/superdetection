
export class Ken {

    constructor(){
        this.kenPicx = 0;
        this.kenSpeed = 1;
    }

    updateKen(kenPic,canvasEl) {
        this.kenPicx += this.kenSpeed;
        if (this.kenPicx >= canvasEl.width - kenPic.width || this.kenPicx < 0){
        this.kenSpeed *= -1;
        }
    }
    
    drawKen(kenPic, graph){
        graph.drawImage(kenPic,this.kenPicx, 110, kenPic.width  , kenPic.height);
    }

}





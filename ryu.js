export class Ryu {

    constructor(image){
        this.ryuPicx = 300;
        this.ryuSpeed = -1;
        this.image = image
    }

    updateRyu(canvasEl) {
        this.ryuPicx += this.ryuSpeed;
        if (this.ryuPicx >= canvasEl.width - this.image.width || this.ryuPicx < 0){
        this.ryuSpeed *= -1;
        }
    }
    
    drawRyu(graph){
        graph.drawImage(this.image, this.ryuPicx, 110, this.image.width, this.image.height);
    }
}




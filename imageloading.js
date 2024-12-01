const kenPic = new Image();
const ryuPic = new Image();
const Bg = new Image();

function imageLoad(loadingDone){
    
    var picCounts = [];
    picCounts = [        
        {pic : kenPic, src: "images/ken1.png"},
        {pic : ryuPic, src : "images/ryu2.png"},
        {pic : Bg, src: "images/background.png"},
        
    ]    
    var picCountslength = picCounts.length;
    for (let i = 0; i < picCounts.length; i++ ){

        picCounts[i].pic.src = picCounts[i].src;         
        picCounts[i].pic.onload = function() {            
            picCountslength --;
            if (picCountslength == 0){            
                loadingDone();
            }        
        }
    }    
}

export { kenPic, ryuPic, Bg, imageLoad };

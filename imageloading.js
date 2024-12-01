var kenPic = new Image();
var Bg = new Image();
var picCounts = [];

function imageLoad(){

    picCounts = [        
        {pic : kenPic, src: "images/ken1.png"},
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

 


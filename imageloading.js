var kenPic = new Image();
var picCounts = [];
var picCountslenght;


function imageLoad(){

    picCounts = [        
        {pic : kenPic, src: "images/ken1.png"},
    ]
    
    picCountslenght = picCounts.length;
    for (let i = 0; i < picCounts.length; i++ ){
        picCounts[i].pic.src = picCounts[i].src;         
        picCounts[i].pic.onload = function(){            
            picCountslenght --;
            if (picCountslenght == 0){            
                loadingDone();
            }        
        }
    }    
}

 


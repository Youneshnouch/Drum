
var Button = document.querySelectorAll(".drum");


for(var i=0; i<Button.length; i++){

Button[i].addEventListener("click", function(){


    var audio = new Audio("sounds/"+this.innerHTML+".mp3");
    audio.play();
    
    
});

}

for(var i=0; i<Button.length; i++){

    Button[i].addEventListener("click", function(){
    
    
        if(this.innerHTML=="w"){
            Button[0].classList.add("pressed");
            setTimeout(function(){ Button[0].classList.remove("pressed"); }, 150);
        } 
        else if(this.innerHTML=="a"){
            Button[1].classList.add("pressed");
            setTimeout(function(){ Button[1].classList.remove("pressed"); }, 150);
        } 
        else if(this.innerHTML=="s"){
            Button[2].classList.add("pressed");
            setTimeout(function(){ Button[2].classList.remove("pressed"); }, 150);
        }
        else if(this.innerHTML=="d"){
            Button[3].classList.add("pressed");
            setTimeout(function(){ Button[3].classList.remove("pressed"); }, 150);
        }
        else if(this.innerHTML=="j"){
            Button[4].classList.add("pressed");
            setTimeout(function(){ Button[4].classList.remove("pressed"); }, 150);
        }
        else if(this.innerHTML=="k"){
            Button[5].classList.add("pressed");
            setTimeout(function(){ Button[5].classList.remove("pressed"); }, 150);
        }
        else if(this.innerHTML=="l"){
            Button[6].classList.add("pressed");
            setTimeout(function(){ Button[6].classList.remove("pressed"); }, 150);
        }
        
    });
    
    }

document.addEventListener("keydown", function(){
        
        var audio = new Audio("sounds/"+ event.key +".mp3");
        audio.play();
     
    
    });

    for(var i=0; i<Button.length; i++){

        Button[i].addEventListener("keydown", function(){
        
        
            if(event.key=="w"){
                Button[0].classList.add("pressed");
                setTimeout(function(){ Button[0].classList.remove("pressed"); }, 150);
            } 
            else if(event.key=="a"){
                Button[1].classList.add("pressed");
                setTimeout(function(){ Button[1].classList.remove("pressed"); }, 150);
            } 
            else if(event.key=="s"){
                Button[2].classList.add("pressed");
                setTimeout(function(){ Button[2].classList.remove("pressed"); }, 150);
            }
            else if(event.key=="d"){
                Button[3].classList.add("pressed");
                setTimeout(function(){ Button[3].classList.remove("pressed"); }, 150);
            }
            else if(event.key=="j"){
                Button[4].classList.add("pressed");
                setTimeout(function(){ Button[4].classList.remove("pressed"); }, 150);
            }
            else if(event.key=="k"){
                Button[5].classList.add("pressed");
                setTimeout(function(){ Button[5].classList.remove("pressed"); }, 150);
            }
            else if(event.key=="l"){
                Button[6].classList.add("pressed");
                setTimeout(function(){ Button[6].classList.remove("pressed"); }, 150);
            }
            
        });
        
        }


// for(var i=0; i<Button.length; i++){

//     Button[i].addEventListener(cli)
    
//     classlist.add
// });
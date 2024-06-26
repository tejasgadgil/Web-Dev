var audioFiles=[
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3"
]
var numberDrumButtons= document.querySelectorAll(".drum").length;
for(var i=0; i<numberDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonText=this.innerHTML;
        animateButton(buttonText);
        switch(buttonText){
            case "w":
                var audio=new Audio( "sounds/crash.mp3",);
                audio.play();
                break;

            case "a":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break  ; 

            case "s":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break; 

            case "d":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break ;

            case "j":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break; 

            case "l":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break ;

        }

    });
}

document.addEventListener('keydown', (event)=> {    
    var key=event.key;
    animateButton(key);
    switch(key){
        case "w":
            var audio=new Audio( "sounds/crash.mp3",);
            audio.play();
            break;

        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break  ; 

        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break; 

        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break ;

        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 

        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break ;

    }
    
});

function animateButton(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(
        function(){
            document.querySelector("."+key).classList.remove("pressed");
        }, 500
    );
}
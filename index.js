
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    this.style.color="orangered";
    

    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


    
});
}

document.addEventListener("keypress",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

   })

function makeSound(key){

    switch (key) {
        case "A":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            
            break;
        case "R":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

            

        case "I":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "V":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "U":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "M":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "S":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(buttonInnerHTML);
            
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);


}


   









  


    
var clicked = false;

document.body.querySelector(".menuIcon").addEventListener("click", function () {
    clicked=!clicked;
    if(clicked){
        document.body.querySelector(".menu").style.top="60px";
    }else{
        document.body.querySelector(".menu").style.top="-600px";
    }
})
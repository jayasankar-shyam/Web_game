const finn = document.getElementById("finn");
const obstacle = document.getElementById("obstacle");

function jump() {
    if(finn.classList != "jump"){
    finn.classList.add("jump");

    setTimeout(function(){
        finn.classList.remove("jump");
    },400);
}
}
let gameOver =setInterval(function(){
    let finnTop = parseInt(window.getComputedStyle(finn).getPropertyValue("top"));
    let obstacleLeft =parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 50 && obstacleLeft > 0 && finnTop >= 175){
        console.log("collision");
       }
},10);


document.addEventListener("keydown",function(event){
    jump();
});
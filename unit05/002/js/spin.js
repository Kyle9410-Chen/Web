var t = 0;
var speed = 1;
setInterval(() => {
    var elements = document.getElementsByClassName("number")

    for(let element of elements){
        element.style.transform = `rotate(calc(var(--i)*50deg - ${t}deg))`
    }

    t += speed/5;
}, 10);

function speedChange(){
    
    var element = document.getElementById("speed")
    speed = element.value

}
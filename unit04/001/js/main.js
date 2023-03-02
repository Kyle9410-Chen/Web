function onClickMark(index){
    document.getElementsByClassName("info")[index].scrollIntoView({behavior : "smooth", block: "center"})
}

function showImage(index){
    var element = document.getElementById("dish")
    switch (index) {
        case 0:
            element.src = "./001/source/08.jpg"
            break;
        case 1:
            element.src = "./001/source/07.jpg"
            break;
        case 2:
            element.src = "./001/source/03.jpg"
            break;
        case 3:
            element.src = "./001/source/04.jpg"
            break;
        case 4:
            element.src = "./001/source/05.jpg"
            break;
        case 5:
            element.src = "./001/source/06.jpg"
            break;
        default:
            break;
    }
    element.style.visibility = "visible"
}

function closeImage(){
    document.getElementById("dish").style.visibility = "hidden"
}

function toRight() {
    var element = document.getElementById("menu")
    element.scrollIntoView({behavior: "smooth"})
    document.getElementById("toRight").style.visibility = "hidden"
    document.getElementById("infoData").style.overflowY = "hidden"
    document.getElementById("toLeft").style.visibility = "visible"
}

function toLeft() {
    var element = document.getElementById("infoData")
    element.scrollIntoView({behavior: "smooth"})
    document.getElementById("toRight").style.visibility = "visible"
    document.getElementById("toLeft").style.visibility = "hidden"
    document.getElementById("infoData").style.overflowY = "scroll"
}
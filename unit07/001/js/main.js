var modeFlag = 0;

setInterval(() => {
    if (!modeFlag) return
    var element = document.getElementById("text")
    element.innerText = new Date().toString()
}, 1)

function showSnackBar(index){
    var element = document.getElementsByClassName("snackBar")[index]
    element.classList.add("show")
    setTimeout(() => {
        element.classList.remove("show")
    }, 2950);
}


function showTime(){
    var element = document.getElementById("text")
    element.innerText = new Date().toString()
    modeFlag = 1
    addData("Show Time")
}

function showText() {
    var element = document.getElementById("text")
    element.innerText = "Use button to change this text."
    modeFlag = 0
    addData("Restore Text")
}
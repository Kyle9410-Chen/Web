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


function toggleText(trigger){
    if (modeFlag == 1){
        var element = document.getElementById("text")
        element.innerText = "Use button to change this text."
        modeFlag = 0
        addData("Restore Text")
        trigger.innerText = "Show Time"
        return
    }
    var element = document.getElementById("text")
    element.innerText = new Date().toString()
    modeFlag = 1
    trigger.innerText = "Restore Text"
    addData("Show Time")
}
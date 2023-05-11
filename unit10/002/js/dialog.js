function closeColorDialog(){
    var element = document.getElementsByClassName("dialog").item(0)
    element.style.scale = "0"
    setTimeout(() => {
        var dialog = document.getElementById("colorDialog")
        dialog.style.visibility = "hidden"
    }, 200);
}

function showColorDialog(){
    document.getElementById("colorDialog").style.visibility = "visible"
    var element = document.getElementsByClassName("dialog").item(0)
    element.style.scale = "1"
}
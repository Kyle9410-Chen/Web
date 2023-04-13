var modeColor = {
    "error" : "#ff555588",
    "warning" : "#eed20288"
}

function newAlert(option){
    var alert = document.getElementById("alert")
    var newContent = document.createElement("div")
    newContent.classList.add("content")
    newContent.innerHTML += `<b>${option["title"]??"title"}</b>`
    newContent.innerHTML += `<p>${option["content"]}</p>`
    newContent.style.backgroundColor = modeColor[option["mode"]??"error"]
    alert.appendChild(newContent)

    setTimeout(() => {
        newContent.classList.add("close")
        setTimeout(() => {
            alert.removeChild(newContent)
        }, 500);
    }, option["during"]??3000);
}
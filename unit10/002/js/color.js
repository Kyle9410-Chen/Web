function colorChangeBG(element) {
    document.body.style.backgroundColor = element.style.backgroundColor
}

function colorChangeText(element) {
    var text = document.getElementById("content")
    text.style.color = element.style.backgroundColor
}

function newColor(){
    var r = parseInt(document.getElementById("RInput").value).toString(16).padStart(2, "0")
    var g = parseInt(document.getElementById("GInput").value).toString(16).padStart(2, "0")
    var b = parseInt(document.getElementById("BInput").value).toString(16).padStart(2, "0")

    var tdBG = document.createElement("td")
    tdBG.style.backgroundColor = "#" + r.toString() + g + b
    tdBG.setAttribute("onclick", "colorChangeBG(this)")
    document.querySelector("table tr:first-child").appendChild(tdBG)

    
    var tdText = document.createElement("td")
    tdText.style.backgroundColor = "#" + r + g + b
    tdText.setAttribute("onclick", "colorChangeText(this)")
    document.querySelector("table tr:last-child").appendChild(tdText)
}
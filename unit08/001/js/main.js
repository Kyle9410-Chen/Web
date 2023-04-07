function showSnackBar(index){
    var element = document.getElementsByClassName("snackBar")[index]
    element.classList.add("show")
    setTimeout(() => {
        element.classList.remove("show")
    }, 2950);
    console.log("test")
}

var originText = "臺北市立大安高工"

var text = []

window.onload = () => {
    for (let i = 0; i < originText.length; i++) {
        var temp = originText[i]
        temp = temp.padEnd(8, "　")
        text.push(temp)
    }

    for (let i = 1; i <= originText.length; i++) {
        var temp = originText.substring(0, i)
        temp = temp.padEnd(8, "　")
        text.push(temp)
    }

    var index = 1
    text.forEach(x => {
        var element = document.querySelector("#content")
        element.innerHTML += `<p style=\"--i:${index}\">${x}</p>`
        index++
    })
}

function showText() {
    var elements = [...document.querySelectorAll("#content p")]
    for (const x of elements) {
        x.classList.add("show")
    }
}
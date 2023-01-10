function toggleSidebar(){
    let element = document.getElementById("color");
    if (element.style.display == "none"){
        element.style.display = "block"
    }
    else{
        element.style.display = "none"
    }
}

function colorChange(){
    console.log("test")
    let elements = document.getElementsByClassName("color_change")
    for (var element of elements) {
        let r = document.getElementById("R")
        let g = document.getElementById("G")
        let b = document.getElementById("B")
        element.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`
    }
}
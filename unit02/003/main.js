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

function colorClick(id){
    let elements = document.getElementsByClassName("color_change")
    for (let element of elements){
        switch (id) {
        case 1:
            element.style.backgroundColor = "rgb(255, 0, 0)"
            break;
        case 2:
            element.style.backgroundColor = "rgb(255, 165, 0)"
            break;
        case 3:
            element.style.backgroundColor = "rgb(255, 255, 0)"
            break;
        case 4:
            element.style.backgroundColor = "rgb(0, 128, 0)"
            break;
        case 5:
            element.style.backgroundColor = "rgb(0, 0, 255)"
            break;
        case 6:
            element.style.backgroundColor = "rgb(75, 0, 130)"
            break;
        case 7:
            element.style.backgroundColor = "rgb(128, 0, 128)"
            break;
        default:
            break;
        }
    }
    let color = elements[0].style.backgroundColor
    let rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(color)
    document.getElementById("R").value = rgb[1]
    document.getElementById("G").value = rgb[2]
    document.getElementById("B").value = rgb[3]
}
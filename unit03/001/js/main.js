now = 0
function onRight(){
    var elements = document.getElementsByClassName("artical")
    if (now == 2) { return; }
    now += 1
    elements[now].scrollIntoView({behavior: "smooth", })

    arrowCheck()
}

function onLeft(){
    var elements = document.getElementsByClassName("artical")
    if (now == 0) { return; }
    now -= 1
    elements[now].scrollIntoView({behavior: "smooth"})

    arrowCheck()
}

function arrowCheck(){
    var right = document.getElementById("Right")
    var left = document.getElementById("Left")
    right.style.visibility = "visible"
    left.style.visibility = "visible"
    switch (now) {
        case 0:
            left.style.visibility = "hidden"
            break;
        case 2:
            right.style.visibility = "hidden"
            break;
    }
}
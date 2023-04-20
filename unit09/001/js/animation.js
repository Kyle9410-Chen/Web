function hoverText() {
    var frame = document.getElementById("text")

    for (var element of [...frame.children]) {
        element.style.color = "#43e2ff"
    }

    if(frame.classList.contains("animation")) { return }
    
    frame.classList.add("animation")
    
    var index = 0
    var element_index = 0
    for (var element of [...frame.children]) {
        setTimeout(() => {
            [...frame.children][element_index].classList.add("fly")
            element_index++
        }, 100 * index);
        index++
    }

    setTimeout(() => {
        var index = 0
        var element_index = 0
        for (var element of [...frame.children]) {
            setTimeout(() => {
                [...frame.children][element_index].classList.remove("fly")
                element_index++
            }, 100 * index);
            index++
        }
    }, 400);
}

function leaveText() {
    var frame = document.getElementById("text")
    for (var element of [...frame.children]) {
        element.style.color = "#fff"
    }

    frame.classList.remove("animation")
}

function Whoosh() {
    var frame = document.getElementById("text")

    
    frame.classList.add("animation")
    
    var index = 0
    var element_index = 0
    for (var element of [...frame.children]) {
        setTimeout(() => {
            [...frame.children][element_index].classList.add("whoosh_left")
            element_index++
        }, 200 * index);
        index++
    }

    setTimeout(() => {
        var index = 0
        var element_index = 0
        for (var element of [...frame.children]) {
            setTimeout(() => {
                [...frame.children][element_index].classList.remove("whoosh_left");
                [...frame.children][element_index].classList.add("whoosh_right");
                element_index++
            }, 200 * index);
            index++
        }

        setTimeout(() => {
            var index = 0
            var element_index = 0
            for (var element of [...frame.children]) {
            setTimeout(() => {
                [...frame.children][element_index].classList.remove("whoosh_right");
                element_index++
            }, 200 * index);
            index++
            setTimeout(() => {
                frame.classList.remove("animation")
            }, 800);
        }
        }, 2000);
    }, 2000);
}
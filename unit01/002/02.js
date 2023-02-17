function menuClick(element) {
    const menu = document.querySelector(".header .menu")
    if (menu.classList.contains("open")){
        menu.classList.remove("open")
    }
    else{
        menu.classList.add("open")
    }
}

function themeClick(element){
    const body = document.querySelector("body")

    if (body.classList.contains("dark")){
        body.classList.remove("dark")
    }
    else{
        body.classList.add("dark")
    }
}
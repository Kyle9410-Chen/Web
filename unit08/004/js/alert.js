var modeColor = {
    "error" : "#ff5555",
    "warning" : "#eed202"
}

var defaultOption = {
    title : "System",
    content : "",
    mode : "error",
    during : 3000,
    behavior : {
        smoothIn : false
    },
}

function newAlert(setOption){
    var option = {...defaultOption, ...setOption}
    var alert = document.getElementById("alert")
    var newContent = document.createElement("div")
    newContent.classList.add("content")
    newContent.innerHTML += `<b>${option.title}</b>`
    newContent.innerHTML += `<p>${option.content}</p>`
    newContent.style.backgroundColor = modeColor[option.mode]
    alert.appendChild(newContent)

    if(option.behavior.smoothIn){
        setTimeout(() => {
            newContent.classList.add("show") 
        }, 1)
    }
    else{
        newContent.classList.add("show")
    }        

    setTimeout(() => {
        newContent.style.setProperty("--alert_before_width", "0")
        newContent.style.setProperty("--alert_before_transition_duration", `${option.during}ms`)
    }, 1);
    

    setTimeout(() => {
        newContent.classList.remove("show")
        newContent.classList.add("close")
        setTimeout(() => {
            alert.removeChild(newContent)
        }, 500);
    }, option.during)
}
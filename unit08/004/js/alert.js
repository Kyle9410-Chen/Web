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
        smoothIn : false,
        float : true
    },
}

function newAlert(setOption){
    var option = {...defaultOption, ...setOption}
    option.behavior = {...defaultOption.behavior, ...setOption.behavior}

    var alert = document.getElementById("alert")
    var newContent = document.createElement("div")
    var contentInner = document.createElement("div")
    newContent.classList.add("border")
    contentInner.classList.add("content")
    contentInner.innerHTML += `<b>${option.title}</b>`
    contentInner.innerHTML += `<p>${option.content}</p>`
    contentInner.style.backgroundColor = modeColor[option.mode]
    newContent.appendChild(contentInner)
    alert.appendChild(newContent)

    if(option.behavior.smoothIn){
        setTimeout(() => {
            newContent.classList.add("show") 
        }, 1)
    }
    else{
        newContent.classList.add("show")
    }

    if(option.behavior.float){
        newContent.addEventListener("mousemove", (e) => {
            
            var rect = newContent.getBoundingClientRect()
            x = rect.left
            y = rect.top
            c_x = (rect.right - rect.left) / 2
            c_y = (rect.bottom - rect.top) / 2
            m_x = e.pageX - x - window.scrollX
            m_y = e.pageY - y - window.scrollY

            contentInner.style.transform = `perspective(50em) rotateY(${(m_x - c_x)/c_x*15}deg) rotateX(${(c_y - m_y)/c_y*15}deg)`
        })

        newContent.addEventListener("mouseout", () => {
            contentInner.style.transform = ""
        })

        newContent.addEventListener("click", () => {
            newContent.classList.remove("show")
            newContent.classList.add("close")
            setTimeout(() => {
                alert.removeChild(newContent)
            }, 500);
        })
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
var bright = true
var changeCheck = false

function overIcon(element){
    if (bright){
        element.animate([
            {transform: 'rotate(0)' ,color:"#000000"},
            {transform: 'rotate(180deg)' ,color:"#ffffff"}
        ],{
            duration: 500,
            iterations: 1,
            fill : "both"
        })

        document.getElementById("header-right").animate([
            {backgroundColor: "#f1f1f1"},
            {backgroundColor: "#1e1e1e"}
        ],{
            duration: 500,
            iterations: 1,
            fill : "both"
        })

        document.getElementById("bright_tips").style.visibility = "visible"
        document.getElementById("bright_tips").style.opacity = 1
        document.getElementById("bright_tips").style.backgroundColor = "#1e1e1e"
        document.getElementById("bright_tips").style.color = "#ffffff"
    }
    else{
        element.animate([
            {transform: 'rotate(0)' ,color:"#ffffff"},
            {transform: 'rotate(180deg)',color:"#000000"}
        ],{
            duration: 500,
            iterations: 1,
            fill : "both"
        })
        document.getElementById("header-right").animate([
            {backgroundColor: "#1e1e1e"},
            {backgroundColor: "#f1f1f1"}
        ],{
            duration: 500,
            iterations: 1,
            fill : "both"
        })

        document.getElementById("bright_tips").style.visibility = "visible"
        document.getElementById("bright_tips").style.opacity = 1
        document.getElementById("bright_tips").style.backgroundColor = "#f1f1f1"
        document.getElementById("bright_tips").style.color = "#000000"
    }
    
}

function outIcon(element){
    if (bright){

        if (changeCheck){
            element.animate([
                {transform: 'rotate(180deg)' ,color:"#000000"},
                {transform: 'rotate(360deg)',color:"#000000"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })

            document.getElementById("header-right").animate([
                {backgroundColor: "#f1f1f1"},
                {backgroundColor: "#f1f1f1"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })

            changeCheck = false

            
        }
        else{
            element.animate([
                {transform: 'rotate(180deg)' ,color:"#ffffff"},
                {transform: 'rotate(360deg)',color:"#000000"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })

            document.getElementById("header-right").animate([
                {backgroundColor: "#1e1e1e"},
                {backgroundColor: "#f1f1f1"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })
        }

        document.getElementById("bright_tips").style.visibility = "hidden"
        document.getElementById("bright_tips").style.opacity = 0
    }
    else{
        if(changeCheck){
            element.animate([
                {transform: 'rotate(180deg)' ,color:"#ffffff"},
                {transform: 'rotate(360deg)',color:"#ffffff"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })

            document.getElementById("header-right").animate([
                {backgroundColor: "#1e1e1e"},
                {backgroundColor: "#1e1e1e"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })
            changeCheck = false
        }
        else{
            element.animate([
                {transform: 'rotate(180deg)' ,color:"#000000"},
                {transform: 'rotate(360deg)',color:"#ffffff"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })
            document.getElementById("header-right").animate([
                {backgroundColor: "#f1f1f1"},
                {backgroundColor: "#1e1e1e"}
            ],{
                duration: 500,
                iterations: 1,
                fill : "both"
            })
        }
        document.getElementById("bright_tips").style.visibility = "hidden"
        document.getElementById("bright_tips").style.opacity = 0
    }

    
}

function clickIcon(element){
    bright = bright ? false : true
    
    if(bright){
        document.getElementById("header").style.backgroundColor = "#f1f1f1"
        var contents = document.getElementsByClassName("content")
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.color = "#000000"
        }
        document.body.style.backgroundColor = "#ffffff"
        document.getElementById("header-right").style.backgroundColor = "#e0e0e0"
        element.style.color = "#000000"
        changeCheck = true
        document.getElementById("bright_tips").style.backgroundColor = "#1e1e1e"
        document.getElementById("bright_tips").style.color = "#ffffff"
    }
    else{
        document.getElementById("header").style.backgroundColor = "#1e1e1e"
        var contents = document.getElementsByClassName("content")
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.color = "#ffffff"
        }
        document.body.style.backgroundColor = "#2e2e2e"
        document.getElementById("header-right").style.backgroundColor = "#2e2e2e"
        element.style.color = "#ffffff"
        changeCheck = true
        document.getElementById("bright_tips").style.backgroundColor = "#f1f1f1"
        document.getElementById("bright_tips").style.color = "#000000"
    }
}
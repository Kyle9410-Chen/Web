function toggleVar() {
    var element = document.getElementById("varList")
    if (element.classList.contains("show")){
        var rule = [...[...document.styleSheets].find(x => x.title == "var").cssRules].find(x => x.name == "closeVar")
        
        console.log(rule.findRule("0%"))
        rule.deleteRule("0%")
        console.log(rule.findRule("0%"))
        console.log(element.offsetLeft)
        rule.appendRule(`0% {left: ${element.offsetLeft}px;}`)
        console.log(rule.findRule("0%"))

        element.classList.remove("show")
        element.classList.add("close")
    }
    else{
        var rule = [...[...document.styleSheets].find(x => x.title == "var").cssRules].find(x => x.name == "showVar")
        
        console.log(rule.findRule("0%"))
        rule.deleteRule("0%")
        console.log(rule.findRule("0%"))
        console.log(element.offsetLeft)
        rule.appendRule(`0% {left: ${element.offsetLeft}px;}`)
        console.log(rule.findRule("0%"))
        
        element.classList.add("show")
        element.classList.remove("close")
    }
}
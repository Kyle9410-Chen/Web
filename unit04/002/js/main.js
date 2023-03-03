const color = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#00ffff",
    "#ff00ff",
    "#ffffff",
    "#ff8080",
    "#80ff80",
    "#8080ff",
]
const lineColor = [
    "#ff000080",
    "#00ff0080",
    "#0000ff80",
    "#ffff0080",
    "#00ffff80",
    "#ff00ff80",
    "#ffffff80",
    "#ff808080",
    "#80ff8080",
    "#8080ff80",
]

var data = []
var sortMode = -1
var sortType = 0
var analysisMode = 1
var dataIndex = 0

var chart
class stuData {
    name = ""
    no = 0
    chinese = 0
    english = 0
    math = 0
    s1 = 0
    s2 = 0
    total = 0
    avg = 0
    constructor(name, no, chinese, english, math, s1, s2){
        this.name = name
        this.no = no
        this.chinese = chinese
        this.english = english
        this.math = math
        this.s1 = s1
        this.s2 = s2
        this.total = chinese+english+math+s1+s2
        this.avg = this.total/5
    }
}


function randomNumber(max){
    return Math.floor(Math.random() * max)
}

function createTable(){
    for (let i = 0; i < 10; i++) {
        data.push(new stuData(`name${data.length+1}`, data.length+1, randomNumber(100), randomNumber(100), randomNumber(100), randomNumber(100), randomNumber(100)))
    }

    var table = document.getElementById("tableScore")

    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr")
        tr.classList.add("tableContent")
        
        for (let j = 0; j < 9; j++) {
            var d = data[i]
            var td = document.createElement("td")
            td.classList.add("tableContent")
            switch (j) {
                case 0:
                    td.append(d.name)
                    break;
                case 1:
                    td.append(d.no)
                    break;
                case 2:
                    td.append(d.chinese)
                    break;
                case 3:
                    td.append(d.english)
                    break;
                case 4:
                    td.append(d.math)
                    break;
                case 5:
                    td.append(d.s1)
                    break;
                case 6:
                    td.append(d.s2)
                    break;
                case 7:
                    td.append(d.total)
                    break;
                case 8:
                    td.append(d.avg)
                    break;
            }
            tr.appendChild(td)
        }

        var td = document.createElement("td")
        td.classList.add("selfAnalysis")
        td.append("成績分析")
        td.addEventListener("click", () => {
            selfAnalysis(i)
        })
        tr.appendChild(td)
        
        table.appendChild(tr)
    }
}

function downTo(){
    analysisMode = 1
    chart.destroy()
    generateChart()
    data.forEach(v => {
        chart.data.datasets.pop()
    });
    chart.update()
    window.scrollTo({behavior: "smooth", top: document.body.scrollHeight})
}

function backTo(){
    window.scrollTo({behavior: "smooth", top: 0})
}


function sortData(index, element) {
    var table = document.getElementById("tableScore")
    var c = table.children

    if (index == sortType){
        sortMode = sortMode == 1? -1 : 1
    }
    else{
        sortMode = 1
    }

    sortType = index
    
    for (let i = 0; i < 10; i++) {
        c[1].remove()
    }
    
    for (let i = 0; i < 9; i++){
        if (i == index) continue
        var d = c[0].children[0].children[i]
        d.style.border = "none"
    }

    element.style.border = sortMode == 1? "3px solid #0ff" : "3px solid #ff0"

    var sortedData = []

    switch (index) {
        case 0:
            sortedData = data.sort((a, b) => {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB){
                    return sortMode == 1? -1 : 1
                }
                if (nameA > nameB){
                    return sortMode == 1? 1 : -1
                }
                return 0
            })
            break;
        case 1:
            sortedData = data.sort((a, b) => sortMode*(a.no - b.no))
            break;
        case 2:
            sortedData = data.sort((a, b) => sortMode*(a.chinese - b.chinese))  
            break;
        case 3:
            sortedData = data.sort((a, b) => sortMode*(a.english - b.english))
            break;
        case 4:
            sortedData = data.sort((a, b) => sortMode*(a.math - b.math))  
            break;
        case 5:
            sortedData = data.sort((a, b) => sortMode*(a.s1 - b.s1))  
            break;
        case 6:
            sortedData = data.sort((a, b) => sortMode*(a.s2 - b.s2))
            break;
        case 7:
            sortedData = data.sort((a, b) => sortMode*(a.total - b.total))
            break;
        case 8:
            sortedData = data.sort((a, b) => sortMode*(a.avg - b.avg))
            break;
        default:
            break;
    }


    for (let i = 0; i < sortedData.length; i++) {
        var tr = document.createElement("tr")
        tr.classList.add("tableContent")
        
        for (let j = 0; j < 9; j++) {
            var d = sortedData[i]
            var td = document.createElement("td")
            td.classList.add("tableContent")
            switch (j) {
                case 0:
                    td.append(d.name)
                    break;
                case 1:
                    td.append(d.no)
                    break;
                case 2:
                    td.append(d.chinese)
                    break;
                case 3:
                    td.append(d.english)
                    break;
                case 4:
                    td.append(d.math)
                    break;
                case 5:
                    td.append(d.s1)
                    break;
                case 6:
                    td.append(d.s2)
                    break;
                case 7:
                    td.append(d.total)
                    break;
                case 8:
                    td.append(d.avg)
                    break;
            }
            tr.appendChild(td)
        }
        
        var td = document.createElement("td")
        td.classList.add("selfAnalysis")
        td.append("成績分析")
        td.addEventListener("click", () => {
            selfAnalysis(i)
        })
        tr.appendChild(td)
        table.appendChild(tr)
    }
}

function showSnackbar(){
    var element = document.getElementById("snackbar")
    element.className = "show"
    setTimeout(() => {
        element.className = ""
    }, 3000)
}
var color = [
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
var lineColor = [
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

window.onload = function() {
    createTable()
    generateChart()
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
        table.appendChild(tr)
    }
}

function generateChart(){
    chart = new Chart("chart",{
        type: "line",
        data:{
            labels: ["","國文", "英文", "數學", "專一", "專二",""],
            datasets: (() => {
                var res = []
                for (let i = 0; i < data.length; i++) {
                    res.push({
                        label: data[i].name,
                        fill: false,
                        lineTension: 0,
                        pointRadius: 5,
                        borderWidth: 5,
                        backgroundColor: color[i],
                        borderColor: lineColor[i],
                        data: data.map(x=> [null, x.chinese, x.english, x.math, x.s1, x.s2, null] )[i]
                    })
                }
                return res
            })()
        },
        options:{
            legend:{
                labels:{
                    fontColor: "#fff",
                    fontSize: 18
                }
            },
            scales:{
                xAxes:[{
                    display: true,
                    gridLines:{
                        color: "#e1e1e155"
                    },
                    ticks:{
                        fontSize: 18,
                        fontColor: "rgba(255,255,255,1)"
                    }
                }],
                yAxes:[{
                    gridLines:{
                        color: "#e1e1e155"
                    },
                    ticks:{
                        fontSize: 18,
                        fontColor: "rgba(255,255,255,1)"
                    }
                }],
            }
        }
    })
}

function downTo(){
    var element = document.getElementById("score")
    data.forEach(v => {
        chart.data.datasets.pop()
    });
    chart.update()
    window.scrollTo({behavior: "smooth", top: document.body.scrollHeight})
}

function backTo(){
    window.scrollTo({behavior: "smooth", top: 0})
}

function chartAnimation() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
        data.forEach((v, index) => {
            var res = {
                label: v.name,
                fill: false,
                lineTension: 0,
                pointRadius: 5,
                borderWidth: 5,
                backgroundColor: color[index],
                borderColor: lineColor[index],
                data: [null, v.chinese, v.english, v.math, v.s1, v.s2, null]
            }
            chart.data.datasets.push(res)
        })
        chart.update()
    }
}
function selfAnalysis(index){
    analysisMode = 2
    
    dataIndex = index
    chart.destroy()
    chart = new Chart("chart",{
        type: "radar",
        data: {
            labels: ["國文", "英文", "數學", "專一", "專二"]
        },
        options: {
            scales: {
                ticks: {
                    stepSize: 10
                },
                angleLines: {
                    color: "#e1e1e155"
                }
            }
        }
    })

    window.scrollTo({behavior: "smooth", top: document.body.scrollHeight})
}

function chartAnimation() {
    if (analysisMode == 1){
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
            analysisMode = 3
        }
    }
    else{
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
            d = data[dataIndex]
            var res = {
                label: d.name,
                borderColor: color[dataIndex],
                backgroundColor: lineColor[dataIndex],
                pointBackgroundColor: color[dataIndex],
                pointRadius: 5,
                borderWidth: 2,
                data: [d.chinese, d.english, d.math, d.s1, d.s2]
            }
            chart.data.datasets.push(res)
            chart.update()
            analysisMode = 3
        }
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
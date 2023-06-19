var chart
function closeMenu(){
    var element = document.getElementById("analysis")
    element.classList.add("close")
}

function analysisData(element){
    var menu = document.getElementById("analysis")
    var name = element.parentNode.parentNode.children[0].innerText
    var chinese = element.parentNode.parentNode.children[2].innerText
    var math = element.parentNode.parentNode.children[3].innerText
    var english = element.parentNode.parentNode.children[4].innerText
    var pro1 = element.parentNode.parentNode.children[5].innerText
    var pro2 = element.parentNode.parentNode.children[6].innerText

    try{
        chart.destroy()
    }
    catch {
        
    }
    

    chart = new Chart("chart",{
        type: "radar",
        data: {
            labels: ["國文", "數學", "英文", "專一", "專二"]
        },
        options: {
            legend:{
                labels:{
                    fontColor: "#fff",
                    fontSize: 18
                }
            },
            scale: {
                ticks: {
                    stepSize: 10,
                    max: 100,
                    min: 0
                },
                angleLines: {
                    color: "#e1e1e155",
                    lineWidth: 1,
                },
                gridLines: {
                    color: "#e1e1e155",
                    lineWidth: 1
                },
                pointLabels: {
                    fontColor: "#fff",
                    fontSize: 18
                }
            }
        }
    })

    var res = {
        label: name,
        borderColor: "#43e2ff",
        backgroundColor: "#43e2ff80",
        pointBackgroundColor: "#43e2ff",
        pointRadius: 5,
        borderWidth: 2,
        data: [chinese, math, english, pro1, pro2]
    }
    chart.data.datasets.push(res)
    chart.update()

    menu.classList.remove("close")
}
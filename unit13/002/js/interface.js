var db = []

window.onload = getAll()

function getAll() {
    var data = new FormData()
    data.append("mode", "all")
    var req = new XMLHttpRequest()
    var url = "select.php"
    req.open("POST", url, true)

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200){
            console.log(req.responseText)
            db = JSON.parse(req.responseText)
            refresh()
        }
    }
    req.send(data)
}

function refresh() {
    var table = document.getElementById("table")
    data = []
    index = 0
    var elements = [...table.children[0].children]
    for (const element of elements) {
        if (index == 0) {
            index++ 
            continue
        }
        table.children[0].removeChild(element)
    }
    console.log(db)

    index = 1
    for (const x of db) {
        var tr = document.createElement("tr")
        tr.setAttribute("style",`--index:${index}`)
        var td1 = document.createElement("td"); td1.append(x.studentName)
        var td2 = document.createElement("td"); td2.append(x.seatNo)
        var td3 = document.createElement("td"); td3.append(x.chinese)
        var td4 = document.createElement("td"); td4.append(x.math)
        var td5 = document.createElement("td"); td5.append(x.english)
        var td6 = document.createElement("td"); td6.append(x.pro1)
        var td7 = document.createElement("td"); td7.append(x.pro2)
        var td8 = document.createElement("td"); td8.append((x.chinese + x.english + x.math + x.pro1 + x.pro2))
        var td9 = document.createElement("td"); td9.append(Math.round((x.chinese + x.english + x.math + x.pro1 + x.pro2) / 5, 2))

        newData(index, x.studentName, x.seatNo, x.chinese, x.math, x.english, x.pro1, x.pro2, (x.chinese + x.english + x.math + x.pro1 + x.pro2), Math.round((x.chinese + x.english + x.math + x.pro1 + x.pro2) / 5, 2))
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        table.children[0].appendChild(tr)

        index++
    }
}
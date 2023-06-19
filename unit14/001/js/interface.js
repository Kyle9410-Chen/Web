var db = []
window.onload = getAll()

function getAll() {
    var data = new FormData()
    data.append("mode", 0)
    data.append("password", password)
    var req = new XMLHttpRequest()
    var url = "select.php"
    req.open("POST", url, true)
    console.log(password)

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200){
            console.log(req.responseText)
            var res = JSON.parse(req.responseText)
            try{
                if (res.state = "fail"){
                    dbFail()
                    return
                }
            }
            catch {}
            db = JSON.parse(req.responseText)
            refresh()
        }
    }
    req.send(data)
}

function deleteRequest(id) {
    var data = new FormData()
    data.append("id", id)
    data.append("mode", 1)
    data.append("password", password)
    var req = new XMLHttpRequest()
    var url = "select.php"
    req.open("POST", url, true)

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200){
            console.log(req.responseText)
            refresh()
        }
    }
    req.send(data)
}

function editRequest(studentData){
    var data = new FormData()
    data.append("mode", mode)
    data.append("password", password)
    data.append("name", studentData.name)
    data.append("seatNo", studentData.seatNo)
    data.append("chinese", studentData.chinese)
    data.append("english", studentData.english)
    data.append("math", studentData.math)
    data.append("pro1", studentData.pro1)
    data.append("pro2", studentData.pro2)
    var req = new XMLHttpRequest()
    var url = "select.php"
    req.open("POST", url, true)

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200){
            console.log(req.responseText)
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
        
        if (x.chinese < 60){
            td3.classList.add("bad")
        }
        if (x.math < 60){
            td4.classList.add("bad")
        }
        if (x.english < 60){
            td5.classList.add("bad")
        }
        if (x.pro1 < 60){
            td6.classList.add("bad")
        }
        if (x.pro2 < 60){
            td7.classList.add("bad")
        }
        if (parseInt(td9.innerText) < 60){
            td9.classList.add("bad")
        }


        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        tr.innerHTML += `<td><img id="edit" class="crud" onclick="edit(this, ${index-1})" src="./001/source/edit" width=100% height=100% style="--index:${index}"></td>`
        tr.innerHTML += `<td><img id="delete" class="crud" onclick="deleteData(this)" src="./001/source/delete" width=100% height=100% style="--index:${index}"></td>`
        tr.innerHTML += `<td><img id="dataAnalysis" class="crud" onclick="analysisData(this)" src="./001/source/analysis" width=100% height=100% style="--index:${index}"></td>`
        table.children[0].appendChild(tr)

        index++
    }

    sortData(0, null)
}
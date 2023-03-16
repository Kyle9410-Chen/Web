var data = new Map()
var arithmetic = ["+","-","*","/","%"]
data.set("a", 8)
data.set("b", 2)
data.set("c", 3)
var mode = 1

var newData = {
    one: "a",
    mode: "+",
    two: "a",
    status: [false, false, false]
}

function addData(){
    newData.status = [false, false, false]
    selectOne()
    if (!newData.status[0]) return
    selectMode()
    if (!newData.status[1]) return
    selectTwo()
    if (!newData.status[2]) return

    var n1 = isNaN(parseInt(newData.one))? data.get(newData.one) : parseInt(newData.one)
    console.log(parseInt(newData.one))
    console.log(newData.one)
    var n2 = isNaN(parseInt(newData.two))? data.get(newData.two) : parseInt(newData.two)
    console.log(parseInt(newData.two))
    console.log(newData.two)
    var table = document.getElementById("arithmetic")
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = newData.one
    tr.appendChild(td1)

    var td2 = document.createElement("td")
    td2.innerText = newData.mode
    tr.appendChild(td2)

    var td3 = document.createElement("td")
    td3.innerText = newData.two
    tr.appendChild(td3)

    var td4 = document.createElement("td")
    td4.innerText = "="
    tr.appendChild(td4)

    var td5 = document.createElement("td")
    switch (newData.mode) {
        case "+":
            td5.innerText = n1 + n2
            break;
        case "-":
            td5.innerText = n1 - n2
            break
        case "*":
            td5.innerText = n1 * n2
            break
        case "/":
            td5.innerText = n1 / n2
            break
        case "%":
                td5.innerText = n1 % n2
                break
        default:
            break;
    }
    tr.appendChild(td5)

    var td6 = document.createElement("td")
    td6.style.backgroundColor = "#002244"
    td6.innerHTML += "<a onclick=\"removeData(this)\">移除</a>"
    tr.appendChild(td6)

    table.appendChild(tr)
}

function selectOne(){
    var string = prompt("選擇變數: " + Array.from(data.keys()).join(", ") + "或是數字", "a")
    if (!data.has(string) && isNaN(parseInt(string))){
        alert("請輸入正確的變數")
        return
    }
    newData.one = string
    newData.status[0] = true
}

function selectMode(){
    var string = prompt("選擇運算符: " + arithmetic.map(x=>x[0]).join(", ") , "+")
    if (!arithmetic.includes(string)){
        alert("請輸入正確的運算符號")
        return
    }
    newData.mode = string
    newData.status[1] = true
}

function selectTwo(){
    var string = prompt("選擇變數: " + Array.from(data.keys()).join(", ") + "\n 或是數字", "a")
    if (!data.has(string) && isNaN(parseInt(string))){
        alert("請輸入正確的變數")
        return
    }

    newData.two = string
    newData.status[2] = true
}

var newVar = {
    name: "",
    value: 0,
    status: [false, false]
}

function addVar(){
    newVar.status = [false, false]
    addName()
    if(!newVar.status[0]) return
    addValue()
    if(!newVar.status[1]) return

    data.set(newVar.name, newVar.value)
    alert(`已新增變數 ${newVar.name}`)
}


function addName(){
    var string = prompt("輸入變數名稱", "name")
    console.log(string)
    if (string == null){
        return
    }
    if (data.has(string)){
        alert("已存在")
        return
    }

    newVar.name = string
    newVar.status[0] = true
}

function addValue() {
    var string = prompt("輸入數值", "1")
    if (string == null){
        return
    }
    if (isNaN(parseInt(string))){
        alert("請輸入數字")
        return
    }
    newVar.value = parseInt(string)
    newVar.status[1] = true
}

function removeData(element){
    var table = document.getElementById("arithmetic")
    console.log(element.parentElement.parentElement)
    table.children[0].removeChild(element.parentElement.parentElement)
}
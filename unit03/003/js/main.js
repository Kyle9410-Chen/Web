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

var data = []

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

function createTable(){
    for (let i = 0; i < 10; i++) {
        data.push(new stuData("name1", data.length+1, randomNumber(100), randomNumber(100), randomNumber(100), randomNumber(100), randomNumber(100)))
    }

    var table = document.getElementById("tableScroe")

    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr")
        
        for (let j = 0; j < 9; j++) {
            var d = data[i]
            var td = document.createElement("td")
            switch (j) {
                case 0:
                    td.appendChild(d.name)
                    break;
                case 1:
                    td.appendChild(d.no)
                    break;
                case 2:
                    td.appendChild(d.chinese)
                    break;
                case 3:
                    td.appendChild(d.english)
                    break;
                case 4:
                    td.appendChild(d.math)
                    break;
                case 5:
                    td.appendChild(d.s1)
                    break;
                case 6:
                    td.appendChild(d.s2)
                    break;
                case 7:
                    td.appendChild(d.total)
                    break;
                case 8:
                    td.appendChild(d.avg)
                    break;
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }


}
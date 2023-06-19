var data = []
var sortMode = 1
var sortType = -1

function newData(id, name, no, chinese, math, english, society, science, total, average){
    data.push({
        id : id,
        name: name,
        no: no,
        chinese: chinese,
        math: math,
        english: english,
        society: society,
        science: science,
        total: total,
        average: average
    })
    console.log(data)
}

function sortData(index, element){
    if (index == sortType){
        sortMode = sortMode * (-1)
    }
    else {
        sortMode = 1
    }
    sortType = index

    if (index == 1){
        data = data.sort((a, b) => {
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
    }

    if (index == 2){
        data = data.sort((a, b) => sortMode*(a.no - b.no))
    }

    if (index == 3){
        data = data.sort((a, b) => sortMode*(a.chinese - b.chinese))
    }

    if (index == 4){
        data = data.sort((a, b) => sortMode*(a.math - b.math))
    }

    if (index == 5){
        data = data.sort((a, b) => sortMode*(a.english - b.english))
    }

    if (index == 6){
        data = data.sort((a, b) => sortMode*(a.society - b.society))
    }

    if (index == 7){
        data = data.sort((a, b) => sortMode*(a.science - b.science))
    }

    if (index == 8){
        data = data.sort((a, b) => sortMode*(a.total - b.total))
    }

    if (index == 9){
        data = data.sort((a, b) => sortMode*(a.average - b.average))
    }
    console.log(data)


    var table = document.getElementById("table")

    for (let i = 0; i < 9; i++){
        if (i == index-1) continue
        var d = table.children[0].children[0].children[i]
        d.classList.remove("sort1")
        d.classList.remove("sort2")

    }

    element.classList.add(sortMode == 1? "sort1" : "sort2")
    if (sortMode == 1){
        element.classList.remove("sort2")
    }
    else {
        element.classList.remove("sort1")
    }

    var row = [...table.rows]
    var tempRow = [row[0]]
    data.forEach(x => {
        var tempIndex = row.findIndex(y => window.getComputedStyle(y).getPropertyValue("--index") == x.id)
        tempRow.push(row[tempIndex])
    });
    table.children[0].replaceChildren()
    tempRow.forEach(x => {
        table.children[0].appendChild(x)
    })
}

window.onscroll = function checkScorll(){
    console.log(scrollY)
    var element = document.getElementById("back")
    if(window.scrollY != 0){
        element.style.visibility = "visible"
    }
    else {
        element.style.visibility = "hidden"
    }
}

function toTop(){
    window.scrollTo({behavior: "smooth", top:"0"})
}


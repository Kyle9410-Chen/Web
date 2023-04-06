var recordData = []
class record {
    time
    text
    constructor(time, text){
        this.time = time
        this.text = text
    }
}

function addData(text) {
    recordData.push(new record(new Date().toLocaleTimeString(), text))
    var element = document.getElementById("recordList")
    element.innerHTML += `<div><p>${new Date().toLocaleTimeString()}</p><p>${text}</p></div>`
}

function showRecordList() {
    var element = document.getElementById("recordList")
    if (element.classList.contains("show")){
        element.classList.remove("show")
        return
    }
    element.classList.add("show")
    setTimeout(() => {
        element.scrollTo({behavior: "smooth", top: 0})
    }, 500);
}
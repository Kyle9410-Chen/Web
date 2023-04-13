window.onload = tick
setInterval(tick,1000)


function tick() {
    var hr = document.getElementById("hour")
    var mn = document.getElementById("minute")
    var sc = document.getElementById("second")


    var date = new Date()
    var hour = date.getHours() * 30
    var minute = date.getMinutes() * 6
    var second = date.getSeconds() * 6

    hr.style.transform = `rotateZ(${hour+minute/12}deg)`
    mn.style.transform = `rotateZ(${minute}deg)`
    sc.style.transform = `rotateZ(${second}deg)`

    var timeHr = document.getElementById("hr")
    var timeMn = document.getElementById("mn")
    var timeSc = document.getElementById("sc")
    var timeType = document.getElementById("type")

    var h = date.getHours()
    timeType.innerText = (h >= 12? "PM" : "AM")
    h = (h > 12? h - 12: h)
    

    timeHr.innerText = (h < 10? "0" + h : h)
    timeMn.innerText = (date.getMinutes() < 10? "0" + date.getMinutes() : date.getMinutes())
    timeSc.innerText = (date.getSeconds() < 10? "0" + date.getSeconds() : date.getSeconds())

    var text = document.querySelector("#text")
    var date_text = document.querySelector("#date")
    text.innerText = "Now time: " + date.toString()

    var birth = new Date('2005/10/10')
    var day = Math.floor((date - birth) / (60 * 60 * 24 * 1000))
    date_text.innerText = `Today is my ${day.toString()}${ordinalGet(day)} day since I was born `
}

function ordinalGet(number) {
    if (number % 10 == 1 && number % 100 != 11){
        return "st"
    }
    if (number % 10 == 2 && number % 100 != 12){
        return "nd"
    }
    if (number % 10 == 3 && number % 100 != 13){
        return "rd"
    }
    return "th"
}
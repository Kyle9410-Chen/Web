var idData =  {
    'A' : 10,
    'B' : 11,
    'C' : 12,
    'D' : 13,
    'E' : 14,
    'F' : 15,
    'G' : 16,
    'H' : 17,
    'I' : 34,
    'J' : 18,
    'K' : 19,
    'L' : 20,
    'M' : 21,
    'N' : 22,
    'O' : 35,
    'P' : 23,
    'Q' : 24,
    's' : 25,
    'R' : 26,
    'T' : 27,
    'U' : 28,
    'V' : 29,
    'W' : 30,
    'X' : 31,
    'Y' : 32,
    'Z' : 33
}
function showSnackBar(index){
    var element = document.getElementsByClassName("snackBar")[index]
    element.classList.add("show")
    setTimeout(() => {
        element.classList.remove("show")
    }, 2950);
}

function back() {
    history.back()
}

function showPassword(element) {
    var input = document.getElementById("password")
    input.focus()
    if (element.innerText == "visibility"){
        element.innerText = "visibility_off"
        input.type = "password"
    }
    else {
        element.innerText = "visibility"
        input.type = "text"
    }
}

function checkField() {
    console.log("1")
    var account = document.getElementById("account")
    var password = document.getElementById("password")
    var id = document.getElementById("id")
    var mail = document.getElementById("mail")
    var date = document.getElementById("date")
    var gender = [...document.querySelectorAll(".radio input")]
    var disSubject = document.getElementById("selection")

    if (account.value == ""){
        alert("Please fill in Account")
        return false
    }

    if (password.value === ""){
        alert("Please fill in Password")
        return false
    }

    if (id.value === ""){
        alert("Please fill in Identity Number")
        return false
    }

    if (mail.value === ""){
        alert("Please fill in E-mail")
        return false
    }

    if (date.value === ""){
        alert("Please fill in Birthday")
        return false
    }

    if (!gender.some(x => x.checked)){
        alert("Please fill in Gender")
        return false
    }
    

    if (disSubject.value === ""){
        alert("Please fill in this most dislikest subject")
        return false
    }

    if (!/[A-Z]{1}[1-2]{1}[0-9]{8}/.test(id.value)){
        alert("Identity Number format doesn't match")
        return false
    }

    var num = 0
    var index = 8
    for (const c of id.value){
        if(c in idData){
            num += Math.floor(idData[c]/10)
            num += 9 * Math.floor(idData[c]%10)
            continue
        }
        num += index * parseInt(c)
        index--
    }
    var last = parseInt(id.value.slice(-1))
    if (!((num + last) % 10 == 0)){
        alert("Identity Number format doesn't match")
        return false
    }

    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(mail.value)){
        alert("E-mail format doesn't match")
        return false
    }

    return true
}
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
    var element = document.getElementById("selection")
    var subject = [...document.getElementsByClassName("check")]
    if (element.value === ""){
        alert("請填寫最不喜歡的科目")
        return false
    }
    if (!subject.some(x => x.children[0].checked)){
        alert("請至少填寫一項喜歡的科目")
        return false
    }
}
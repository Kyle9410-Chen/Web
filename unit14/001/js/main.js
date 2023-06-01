function showSnackBar(index){
    var element = document.getElementsByClassName("snackBar")[index]
    element.classList.add("show")
    setTimeout(() => {
        element.classList.remove("show")
    }, 2950);
    console.log("test")
}

function login(){
    var form = document.createElement("form") 
    form.innerHTML = `<input id="password" type="hidden" name="password" value=${document.getElementById("pwd").value}>`
    form.action = "hw01.php"
    form.method = "post"
    form.style.visibility = "hidden"
    document.body.appendChild(form)
    form.submit()
}
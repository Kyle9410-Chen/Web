var flag = true
var canChange = true
function toggleColor(btn) {
    var circle = document.getElementById("circle")
    if (!canChange) return
    canChange = false
    if (flag){
        btn.innerText = "Restore Color"
        circle.classList.add("show")
        setTimeout(() => {
            if (circle.style.top == "0px" || circle.style.top == ""){
                circle.style.top = document.body.clientHeight + "px"
                circle.style.left = document.body.clientWidth + "px"
            }
            else {
                circle.style.top = "0px"
                circle.style.left = "0px"
            }
            canChange = true
        }, 800);
        flag = false
        return
    }
    circle.classList.remove("show")
    btn.innerText = "Change Color"
    setTimeout(() => {
        canChange = true
    }, 800);
    flag = true
}
var flag = true
function toggleLanguage(btn) {
    if (flag){
        btn.innerText = "切換語言至英文"
        document.title = "乙班26號陳維基9-3"
        document.getElementById("header_btn1").innerText = "乙班26號陳維基9-3"
        document.getElementById("title").innerText = "語言切換"
        document.getElementById("link").innerText = "快樂連結"
        document.getElementById("link").href = "https://www.taivs.tp.edu.tw/"
        flag = !flag
        return
    }

    btn.innerText = "Change Language to Chinese"
        document.title = "ClassB 26 Kyle 9-3"
        document.getElementById("header_btn1").innerText = "ClassB 26 Kyle 9-3"
        document.getElementById("title").innerText = "Change Language"
        document.getElementById("link").innerText = "happy link"
        document.getElementById("link").href = "https://www.w3schools.com/"
        flag = !flag
}
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

function toggleDialog(id, bg_id){
    var element = document.getElementById(id)
    var background = document.getElementById(bg_id)
    element.classList.toggle("close")
    background.classList.toggle("close")
}


function sendEdit() {
    
    var name = document.getElementById("studentName")
    if (name.value.trim() === ""){
        newAlert({
            content : `姓名欄位不可為空`,
            mode: "error",
            during : 5000,
            behavior : {
                smoothIn : true,
                float: false
            }
        })
        return 
    } 

    var elements = [...document.getElementsByClassName("sendCheck")]

    for (const element of elements) {
        if (!new RegExp(element.getAttribute("pattern")).test(element.value)){
            element.focus()
            newAlert({
                content : `${element.id}欄位的格式不正確`,
                mode: "error",
                during : 5000,
                behavior : {
                    smoothIn : true,
                    float: false
                }
            })
            return 
        }
    }

    if (mode == 2){
        sendData = db.find(x => x.seatNo === document.getElementById("seatNo").value)
        console.log(sendData)
        sendData.studentName = document.getElementById("studentName").value
        sendData.seatNo = document.getElementById("seatNo").value
        sendData.chinese = parseInt(document.getElementById("chinese").value)
        sendData.math = parseInt(document.getElementById("math").value)
        sendData.english = parseInt(document.getElementById("english").value)
        sendData.pro1 = parseInt(document.getElementById("pro1").value)
        sendData.pro2 = parseInt(document.getElementById("pro2").value)
    }

    else {

        if (db.some(x => x.seatNo == document.getElementById("seatNo").value)){
            document.getElementById("seatNo").focus()
            newAlert({
                content : `以有座號相同的資料`,
                mode: "error",
                during : 5000,
                behavior : {
                    smoothIn : true,
                    float: false
                }
            })
            return 
        }

        data = {
            studentName : document.getElementById("studentName").value,
            seatNo : document.getElementById("seatNo").value,
            chinese : parseInt(document.getElementById("chinese").value),
            math : parseInt(document.getElementById("math").value),
            english : parseInt(document.getElementById("english").value),
            pro1 : parseInt(document.getElementById("pro1").value),
            pro2 : parseInt(document.getElementById("pro2").value)
        }

        db.push(data)
    }
    

    editRequest({
        name : data.studentName,
        seatNo : data.seatNo,
        chinese : data.chinese,
        math : data.math,
        english : data.english,
        pro1 : data.pro1,
        pro2 : data.pro2
    })

    toggleDialog("editBox", "editBoxBackground")
}
<!DOCTYPE html>
<html lang="en">
<script>
    var password = "<?php echo ($_POST["password"] ?? ""); ?>"
</script>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>乙班26號陳維基14-1</title>
    <link rel="stylesheet" href="./001/css/main.css">
    <link rel="stylesheet" href="./001/css/content.css">
    <link rel="stylesheet" href="./001/css/dialog.css">
    <link rel="stylesheet" href="./001/css/box.css">
    <link rel="stylesheet" href="./001/css/alert.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <script src="./001/js/main.js"></script>
    <script src="./001/js/data.js"></script>
    <script src="./001/js/alert.js"></script>
    <script src="./001/js/interface.js"></script>
</head>
<body>
    <div id="header">
        <a class="content">乙班26號陳維基14-1</a>
        <div class="button" style="--i:0;" onclick="showSnackBar(0)">
            <a>說明</a>
        </div>
        <div class="button" style="--i:1;" onclick="insert()">
            <a>新增</a>
        </div>
    </div>

    <div id="content">
        <table id="table">
            <tr>
                <th onclick="sortData(1, this)">姓名</th>
                <th onclick="sortData(2, this)">座號</th>
                <th onclick="sortData(3, this)">國文</th>
                <th onclick="sortData(4, this)">數學</th>
                <th onclick="sortData(5, this)">英文</th>
                <th onclick="sortData(6, this)">專一</th>
                <th onclick="sortData(7, this)">專二</th>
                <th onclick="sortData(8, this)">總分</th>
                <th onclick="sortData(9, this)">平均</th>
                <th>編輯</th>
                <th>刪除</th>
            </tr>
        </table>
    </div>

    <div class="dialogBackground"<?php
        try{
            if (($_POST["password"] ?? "") == "admin123"){
                echo "style=\"visibility:hidden\"";
            }
        }
        catch (Exception $err) {

        }
    ?>
    >
    <?php
        try{
            if (($_POST["password"] ?? "") == "admin123"){
                echo "<script>console.log(\"".$_POST["password"]."\")</script>";
            }
        }
        catch (Exception $err) {
        }
    ?>
        <div id="login" class="dialog">
            <div class="inputBox">
                <input id="pwd" class="input" placeholder=" " type="password" autocomplete="off">
                <label class="hint">Password</label>
                <i></i>
            </div>
            <p>密碼在php檔內，若要使用此系統請輸入該密碼</p>
            <p>11-1 改過了 : D</p>
            <div class="buttonParent"><button onclick="login()">Login</button></div>
        </div>
    </div>

    <div id="editBoxBackground" class="dialogBackground close">
        <div id="editBox" class="dialog close">
            <div class="inputBox">
                <input id="studentName" class="input" placeholder=" " type="text" autocomplete="off">
                <label class="hint">姓名</label>
                <i></i>
            </div>
            <div class="inputBox">
                <input id="seatNo" class="input sendCheck" placeholder=" " type="text" autocomplete="off" pattern="^(?:0[1-9]|[1-9][0-9])$">
                <label class="hint">座號</label>
                <i></i>
            </div>
            <div class="inputBox">
                <input id="chinese" class="input sendCheck" placeholder=" " type="text" autocomplete="off" pattern="^(?:100|[0-9]{1,2})$">
                <label class="hint">國文</label>
                <i></i>
            </div>
            <div class="inputBox">
                <input id="math" class="input sendCheck" placeholder=" " type="text" autocomplete="off" pattern="^(?:100|[0-9]{1,2})$">
                <label class="hint">數學</label>
                <i></i>
            </div>
            <div class="inputBox">
                <input id="english" class="input sendCheck" placeholder=" " type="text" autocomplete="off" pattern="^(?:100|[0-9]{1,2})$">
                <label class="hint">英文</label>
                <i></i>
            </div>
            <div class="inputBox">
                <input id="pro1" class="input sendCheck" placeholder=" " type="text" autocomplete="off" pattern="^(?:100|[0-9]{1,2})$">
                <label class="hint">專一</label>
                <i></i>
            </div>
            <div class="inputBox">
                <input id="pro2" class="input sendCheck" placeholder=" " type="text" autocomplete="off" pattern="^(?:100|[0-9]{1,2})$">
                <label class="hint">專二</label>
                <i></i>
            </div>
            <div class="buttonParent">
                <button onclick="sendEdit()">Submit</button>
                <div class="divider"></div>
                <button class="close" onclick="toggleDialog('editBox', 'editBoxBackground')">Close</button>
            </div>
        </div>
    </div>

    <div id="deleteConfirmBackground" class="dialogBackground close">
        <div id="deleteConfirm" class="dialog close">
            <h2>確定刪除?</h2>
            <div class="buttonParent">
                <button onclick="sendDelete()">Submit</button>
                <div class="divider"></div>
                <button class="close" onclick="toggleDialog('deleteConfirm', 'deleteConfirmBackground')">Close</button>
            </div>
        </div>
    </div>

    <div id="alert"></div>
    
    <div class="snackBar">
        <a>點擊欄位名稱排序資料</a>
    </div>

    <span id="back" class="material-symbols-outlined" onclick="toTop()">arrow_upward</span>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>乙班26號陳維基13-1</title>
    <link rel="stylesheet" href="./001/css/main.css">
    <link rel="stylesheet" href="./001/css/content.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="./001/js/main.js"></script>
    <script src="./001/js/data.js"></script>
    <script src="./001/js/interface.js"></script>
</head>

<body>
    <div id="header">
        <a class="content">乙班26號陳維基13-1</a>
        <div class="button" style="--i:0;" onclick="showSnackBar(0)">
            <a>說明</a>
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
            </tr>
        </table>
    </div>

    <div class="snackBar">
        <a>點擊欄位名稱排序資料</a>
    </div>

    <span id="back" class="material-symbols-outlined" onclick="toTop()">arrow_upward</span>

</body>
</html>
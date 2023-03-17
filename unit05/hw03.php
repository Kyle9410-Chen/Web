<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="./003/css/main.css">
    <link rel="stylesheet" href="./003/css/arithmetic.css">
    <link rel="stylesheet" href="./003/css/varlist.css" title="var">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <script src="./003/js/data.js"></script>
    <script src="./003/js/main.js"></script> 
    <script src="./003/js/varlist.js"></script> 
    <title>乙班26號陳維基5-3</title>
</head>

<body>
    <div id="header">
        <a class="content">乙班26號陳維基5-3</a>

        <div class="button" style="--i:0" onclick="showSnackBar(0)">
            <a>說明</a>
        </div>
        <div class="button" style="--i:1" onclick="addData()">
            <a>新增</a>
        </div>
        <div class="button" style="--i:2" onclick="addVar()">
            <a>新增變數</a>
        </div>
        <div class="button" style="--i:3" onclick="toggleVar()">
            <a>變數列表</a>
        </div>
    </div>

    <div id="data">
        <table id="arithmetic">
            <?php
                $a = 8;
                $b = 2;
                $c = 3;
                echo "<tr class=\"plus\"><td>a</td><td>+</td><td>b</td><td>=</td><td>".($a+$b)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
                echo "<tr class=\"sub\"><td>a</td><td>-</td><td>b</td><td>=</td><td>".($a-$b)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
                echo "<tr class=\"multi\"><td>a</td><td>*</td><td>b</td><td>=</td><td>".($a*$b)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
                echo "<tr class=\"divide\"><td>a</td><td>/</td><td>b</td><td>=</td><td>".($a/$b)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
                echo "<tr class=\"divide\"><td>a</td><td>%</td><td>c</td><td>=</td><td>".($a%$c)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
                echo "<tr class=\"plus\"><td>a</td><td>+</td><td>1</td><td>=</td><td>".($a+1)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
                echo "<tr class=\"sub\"><td>c</td><td>-</td><td>1</td><td>=</td><td>".($c-1)."</td><td style=\"background-color:#002244\"><a onclick=\"removeData(this)\">移除</a></td></tr>";
            ?>
        </table>
    </div>

    <div class="snackBar">
        <a>新增可以新增算式 新增變數可以增加可用變數</a>
    </div>

    <div id="varList">
        <h2>變數列表</h2>
        <span id="close" class="material-symbols-outlined" onclick="toggleVar()">chevron_left</span>
        <span class="varData"><b>a</b><b>=</b><b>8</b><b onclick="removeVar(this)">移除</b></span>
        <span class="varData"><b>b</b><b>=</b><b>2</b><b onclick="removeVar(this)">移除</b></span>
        <span class="varData"><b>c</b><b>=</b><b>3</b><b onclick="removeVar(this)">移除</b></span>
    </div>

</body>

<html>
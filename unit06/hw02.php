<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./002/css/main.css">
    <link rel="stylesheet" href="./002/css/dialog.css">
    <script src="./002/js/main.js"></script>
    <title>乙班26號陳維基6-2</title>
</head>

<body>

    <div id="header">
        <a class="content">乙班26號陳維基6-2</a>
    </div>

    <div id="content">
        <div id="dialog">
            <span class="title"><b>輸出結果</b></span>
            <div class="data">
                <?php
                    $a = $_POST["a"];
                    $b = $_POST["b"];
                    $c = $_POST["c"];
                    echo "<p>a = ".$a.", b = ".$b.", c = ".$c."</p>";
                    echo "<p>a + b = ".($a+$b)."</p>";
                    echo "<p>a - b = ".($a-$b)."</p>";
                    echo "<p>a * b = ".($a*$b)."</p>";
                    try {
                        echo "<p>a / b = ".($a/$b)."</p>";
                    } catch (\Throwable $th) {
                        echo "<p>a / b = infinity</p>";
                    }
                    try {
                        echo "<p>a % c = ".($a%$c)."</p>";
                    } catch (\Throwable $th) {
                        echo "<p>a % c = ?</p>";
                    }
                    echo "<p>a + 1 = ".($a+1)."</p>";
                    echo "<p>c - 1 = ".($c-1)."</p>";
                ?>
            </div>
            <div class="submit"><button onclick="back()">返回</button></div>
        </div>
    </div>
    

    <div class="snackBar">
        <a>test</a>
    </div>

</body>

</html>
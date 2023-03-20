<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./001/css/main.css">
    <link rel="stylesheet" href="./001/css/dialog.css">
    <script src="./001/js/main.js"></script>
    <title>乙班26號陳維基6-1</title>
</head>

<body>

    <div id="header">
        <a class="content">乙班26號陳維基6-1</a>
        <div class="button" style="--i:0;" onclick="showSnackBar(0)">
            <a>說明</a>
        </div>
    </div>

    <div id="content">
        <div id="dialog">
            <div class="data">
                <?php
                    $string = $_POST["string"];
                    echo "<p>輸入的字串 : $string</p>";
                    echo "<p>字串長度 : ".(strlen($string))."</p>";
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
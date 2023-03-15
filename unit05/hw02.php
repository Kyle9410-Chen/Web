<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="./002/css/main.css">
    <link rel="stylesheet" href="./002/css/number.css">
    <script src="./002/js/spin.js"></script>
    <title>乙班26號陳維基5-2</title>
</head>

<body>
    

    <div id="header">
        <a class="content">乙班26號陳維基5-2</a>
    </div>

    <div id="content">
        <div id="numbers">
            <?php
                for ($i=1; $i <= 100 ; $i++) { 
                    $color = ($i-1) % 7;
                    $r = (int)$i / 7;
                    $colorArray = array("#f00", "#f80", "#ff0", "#0f0", "#00f", "#408", "#808");
                    echo "<span class=\"number\" style=\"--i:$i; --r:$r; color:".$colorArray[$color]."\"><b>$i</b></span>";
                }
            ?>
        </div>
    </div>

    <input id="speed" type="range" min="0" max="10" value="1" onchange="speedChange()">

</body>

</html>
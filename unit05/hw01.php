<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./001/css/main.css">
    <link rel="stylesheet" href="./001/css/clock.css">
    <title>乙班26號陳維基5-1</title>
</head>
<body>
    <div id="header">
        <a class="content">乙班26號陳維基5-1</a>
    </div>

    <div id="content">
        <?php
            $second = date('s');

            if ($second % 2 == 0){
                echo "<p id=\"phpClock\" style=\"color:#f55;\">載入時的伺服器時間: ".date('r')."</p>";
            }
            else{
                echo "<p id=\"phpClock\" style=\"color:#55f;\">載入時的伺服器時間: ".date('r')."</p>";
            }
        ?>

        <div id="clock">
            <span style="--i:1">1</span>
            <span style="--i:2">2</span>
            <span style="--i:3">3</span>
            <span style="--i:4">4</span>
            <span style="--i:5">5</span>
            <span style="--i:6">6</span>
            <span style="--i:7">7</span>
            <span style="--i:8">8</span>
            <span style="--i:9">9</span>
            <span style="--i:10">10</span>
            <span style="--i:11">11</span>
            <span style="--i:12">12</span>
        </div>
    </div>
    
</body>
</html>
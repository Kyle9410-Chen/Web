<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./001/css/main.css">
    <link rel="stylesheet" href="./001/css/time.css">
    <link rel="stylesheet" href="./001/css/clock.css">
    <script src="./001/js/clock.js"></script>
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
            
            <div id="second" class="circle" style="--color:#f00"><i></i></div>
            <div id="minute" class="circle" style="--color:#ff0"><i></i></div>
            <div id="hour" class="circle" style="--color:#0f0"><i></i></div>


            <?php
                for ($i=1; $i <= 12; $i++) { 
                    echo "<span style=\"--i:$i\"><b>$i</b></span>";
                }
            ?>
        </div>

        <div id="time">
            <div id="hr" style="--color:#0f0">00</div>
            <div id="mn" style="--color:#ff0">00</div>
            <div id="sc" style="--color:#f00">00</div>
            <div id="type" style="--color:#fff">AM</div>
        </div> 
    </div>
    
</body>
</html>
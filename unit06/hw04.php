<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./003/css/main.css">
    <link rel="stylesheet" href="./003/css/dialog.css">
    <script src="./003/js/main.js"></script>
    <title>乙班26號陳維基6-4</title>
</head>

<body>

    <div id="header">
        <a class="content">乙班26號陳維基6-4</a>
    </div>

    <div id="content">
        <div id="dialog">
            <span class="title"><b>Result</b></span>
            <div class="data">
                <?php
                    $num = 0;
                    $index = 9;
                    $acc = $_POST["account"];
                    $pwd = $_POST["password"];

                    echo "<p>Account: ".$acc." Password: ".$pwd."</p>";

                    $id = str_split($_POST["identity"]);
                    $idData = array(
                        'A' => 10,
                        'B' => 11,
                        'C' => 12,
                        'D' => 13,
                        'E' => 14,
                        'F' => 15,
                        'G' => 16,
                        'H' => 17,
                        'I' => 34,
                        'J' => 18,
                        'K' => 19,
                        'L' => 20,
                        'M' => 21,
                        'N' => 22,
                        'O' => 35,
                        'P' => 23,
                        'Q' => 24,
                        's' => 25,
                        'R' => 26,
                        'T' => 27,
                        'U' => 28,
                        'V' => 29,
                        'W' => 30,
                        'X' => 31,
                        'Y' => 32,
                        'Z' => 33
                    );
                    foreach ($id as $value) {
                        if ($index == 0){
                            continue;
                        }
                        if (array_key_exists($value, $idData)){
                            $num += 1 * (int)($idData[$value]/10);
                            $num += $index * ($idData[$value]%10);
                            $index--;
                            continue;
                        }
                        $num += $index * (int)($value);
                        $index--;
                    }
                    if (($num + (int)end($id)) % 10 == 0){
                        echo "<p>Identity Number: ".($_POST["identity"])."</p>";
                    }
                    else {
                        echo "<p style=\"color: #ff4444\">Error: Does not fit specifications</p>";
                    }
                ?>
            </div>
            <div class="submit"><button onclick="back()">Back</button></div>
        </div>
    </div>
    

    <div class="snackBar">
        <a>test</a>
    </div>

</body>

</html>
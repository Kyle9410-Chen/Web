<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>乙班26號陳維基11-1</title>
    <link rel="stylesheet" href="./001/css/main.css">
    <link rel="stylesheet" href="./001/css/content.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="./001/js/main.js"></script>
    <script src="./001/js/data.js"></script>
</head>
<body>
    <div id="header">
        <a class="content">乙班26號陳維基11-1</a>
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
                <th onclick="sortData(6, this)">社會</th>
                <th onclick="sortData(7, this)">自然</th>
                <th onclick="sortData(8, this)">總分</th>
                <th onclick="sortData(9, this)">平均</th>
            </tr>
            <?php
                for ($i=0; $i < 30; $i++) { 
                    echo "<tr style=\"--index:".($i+1)."\">";
                    echo "<td>name".($i+1)."</td>";
                    echo "<td>".($i+1)."</td>";
                    $data = array();
                    array_push($data, $i+1);
                    array_push($data, "\"name".($i+1)."\"");
                    array_push($data, ($i+1));
                    $total = 0;
                    for ($j=0; $j < 5; $j++) { 
                        $score = rand(0, 100);
                        $total += $score;
                        if ($score < 60){
                            echo "<td class=\"bad\">".$score."</td>";
                        }
                        else {
                            echo "<td>".$score."</td>";
                        }
                        array_push($data, $score);
                    }
                    echo "<td>".($total)."</td>";
                    echo "<td>".(round($total/5, 2))."</td>";
                    array_push($data, $total);
                    array_push($data, round($total/5, 2));
                    echo "</tr>";
                    echo "<script>newData(".join(",",$data).")</script>";
                }
            ?>
        </table>
    </div>

    <div class="snackBar">
        <a>點擊欄位名稱排序資料</a>
    </div>

    <span id="back" class="material-symbols-outlined" onclick="toTop()">arrow_upward</span>

</body>
</html>
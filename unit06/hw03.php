<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./003/css/main.css">
    <link rel="stylesheet" href="./003/css/dialog.css">
    <script src="./003/js/main.js"></script>
    <title>乙班26號陳維基6-3</title>
</head>

<body>

    <div id="header">
        <a class="content">乙班26號陳維基6-3</a>
    </div>

    <div id="content">
        <div id="dialog">
            <span class="title"><b>Result</b></span>
            <div class="data">
                <?php
                    $acc = $_POST["account"];
                    $pwd = $_POST["password"];
                    $date = $_POST["birthDay"];
                    $gender = $_POST["gender"];
                    $subject = $_POST['subject'] ?? null;
                    $dislikeSubject = $_POST["dislikeSubject"];
                    $error = array();

                    echo "<p>Account: ".$acc."  Password: ".$pwd."</p>";
                    echo "<p>BirthDay: ".$date."</p>";
                    if(time() - strtotime($date) < 0){
                        array_push($error, "錯誤：太神奇了，你從未來來的？");
                    }
                    else if(((time() - strtotime($date))/86400/365) > 120){
                        array_push($error, "錯誤：認真？你也活太久了吧");
                    }
                    else {
                        echo "<p>你已經來到這世上 ".(round((time() - strtotime($date)) / 86400))." 天了</p>";
                    }
                    echo "<p>Gender: ".$gender."</p>";
                    echo "<p>Enjoy Subjects: ";

                    try{
                        if($subject == null){
                            throw new Exception("Error Processing Request", 1);
                        }
                        foreach($subject as $value){
                            if ($dislikeSubject == $value){
                                array_push($error, "錯誤：你喜歡你討厭的東西，你好奇怪喔");
                            }
                            echo $value." ";
                        }
                    }
                    catch (\Throwable $th) {
                        array_push($error, "錯誤：你不喜歡任何科目？你還真無趣");
                    }
                    if ($acc == $pwd){
                        array_push($error, "錯誤：你的帳號肯定十分安全");
                    }

                    

                    echo "</p>";
                    echo "<p>DislikeSubject: ".$dislikeSubject."</p>";
                    
                    foreach ($error as $key => $value) {
                        echo "<p style=\"color: #ff4444\">".$value."</p>";
                    }

                    if (count($error) >= 3){
                        echo "<p style=\"color: #ff4444\">錯誤：你有認真填這個表單嗎？你是來搞得吧</p>";
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
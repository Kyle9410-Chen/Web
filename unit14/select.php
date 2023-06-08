<?php
    if (($_POST["password"] ?? "") == "admin123"){
        $con = new mysqli("localhost", "cbs26", "136210@Info", "111_cbs26");
        if ($con -> connect_error) die($con -> connect_errno);
    
        $con -> query("SET NAMES utf8");
        $con -> query("SET chatacter_set_client = 'utf8'");
        $con -> query("SET chatacter_set_results = 'utf8'");
    
        $sql = "";
        if ($_POST["mode"] == 0){
            $sql = "SELECT * FROM scoreTable;";
        }
        else if ($_POST["mode"] == 1){
            $sql = "DELETE FROM scoreTable WHERE seatNo = ".$_POST["id"].";";
        }
        else if ($_POST["mode"] == 2){
            $sql = "UPDATE scoreTable SET "
                ."studentName = '".$_POST["name"]."', "
                ."chinese = ".$_POST["chinese"].", "
                ."math = ".$_POST["math"].", "
                ."english = ".$_POST["english"].", "
                ."pro1 = ".$_POST["pro1"].", "
                ."pro2 = ".$_POST["pro2"]." "
                ."WHERE seatNo = '".$_POST["seatNo"]."';";
        }
        else if ($_POST["mode"] == 3){
            $sql = "INSERT INTO scoreTable (seatNo, studentName, chinese, english, math, pro1, pro2) VALUES('"
                .$_POST["seatNo"]."', '"           
                .$_POST["name"]."', "           
                .$_POST["chinese"].", "           
                .$_POST["english"].", "           
                .$_POST["math"].", "           
                .$_POST["pro1"].", "           
                .$_POST["pro2"].");";           
        }
    
        $exe = $con -> prepare($sql);
        $exe -> execute();
        $sqlResult = $exe -> get_result();
        $res = array();
        while ($data = $sqlResult -> fetch_assoc()){
            array_push($res, $data);
        }
    
        $jsonData = json_encode($res);
        echo $jsonData;
    }
    else {
        $res = array("state" => "fail");
        echo json_encode($res);
    }
?>
<?php
    if ($_POST["password"] ?? "" == "admin123"){
        $con = new mysqli("localhost", "cbs26", "136210@Info", "111_cbs26");
        if ($con -> connect_error) die($con -> connect_errno);
    
        $con -> query("SET NAMES utf8");
        $con -> query("SET chatacter_set_client = 'utf8'");
        $con -> query("SET chatacter_set_results = 'utf8'");
    
        $sql = "";
        if ($_POST["mode"] == 0){
            $sql = "SELECT * FROM scoreTable;";
        }
        else if ($_POST["mode"] == "defaultOrder"){
            $sql = "SELECT * FROM scoreTable ORDER BY (chinese + math + english + pro1 + pro2) DESC, (pro1 + pro2) DESC, pro2 DESC, pro1 DESC, math DESC, english DESC, chinese DESC;";
        }
        else if ($_POST["mode"] == 1){
            $sql = "delete * from scoretable where seatNo = ".$_POST["id"].";";
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
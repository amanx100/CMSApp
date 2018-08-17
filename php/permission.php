<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$acc = array('permission'=>'no');

$conn = new Connection();
$conn = $conn->conn();

$result = $conn->query("SELECT * FROM `user` WHERE `email`='".$_GET['email']."'");

if($result->num_rows > 0) {
    $row  = $result->fetch_assoc();
    if($row['password'] == $_GET['password']) {
        session_start();
        $acc['permission'] = "yes";
        $_SESSION['name'] = 'ahosan';
    }else{
        $acc['permission'] = "Wrong Password!";
    }
}else{
    $acc['permission'] = "Wrong E-Mail Address!";
}
echo json_encode($acc);
?>

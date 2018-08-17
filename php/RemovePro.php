
<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new Connection();
$conn = $conn->conn();

$json = array();
$json['msg'] = 'no';
if($conn->query("DELETE FROM `product_type` WHERE `pro_id` ='".$_GET['id']."'"))
    $json['msg'] = 'yes';

$conn->close();

echo json_encode($json);
?>

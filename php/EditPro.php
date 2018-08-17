
<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT");

$conn = new Connection();
$conn = $conn->conn();
$json = array();
if(isset($_POST['id'])) {
    $conn->query("UPDATE `product_type` SET `pro_name`='".$_POST['ProName']."',`CBMPrice`='".$_POST['cbm']."',`WeightPrice`='".$_POST['weight']."' WHERE `pro_id`='" . $_POST['id'] . "'");
    $json['msg'] = "yes";
}else{
    $json['msg'] = "no";
}
$conn->close();
echo json_encode($json);
?>

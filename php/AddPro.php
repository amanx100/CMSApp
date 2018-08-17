
<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT");

$conn = new Connection();
$conn = $conn->conn();
$json = array();
if(isset($_POST['ProName'])) {
    $result = $conn->query("SELECT `pro_name` FROM `product_type` WHERE `pro_name`='". $_POST['ProName'] ."'");
    if($result->num_rows == 0){
        $result = $conn->query("INSERT INTO `product_type`(`pro_name`, `CBMPrice`, `WeightPrice`) VALUES ('". $_POST['ProName'] ."','".$_POST['cbm']."','".$_POST['weight']."')");
        $json['msg'] = "yes";
    } else {
        $json['msg'] = "This Product is already Added.";
    }
}else{
    $json['msg'] = "No";
}
$conn->close();
echo json_encode($json);
?>

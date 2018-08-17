
<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new Connection();
$conn = $conn->conn();
if(isset($_GET['id']))
    $result = $conn->query("SELECT * FROM `product_type` WHERE `pro_id` = '".$_GET['id']."'");
else
    $result = $conn->query("SELECT * FROM `product_type` ORDER BY pro_id DESC");

$json = array();

if($result->num_rows){
    $k = 1;
    while($row=$result->fetch_assoc()){
        $row['pro-id'] = $k;
        $json[]=$row;
    }
}
$conn->close();

echo json_encode($json);
?>


<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new Connection();
$conn = $conn->conn();

$result = $conn->query("SELECT * FROM `type`");

$json = array();

if($result->num_rows){
    $k = 1;
    while($row=$result->fetch_assoc()){
        $row['serial'] = $k;
        $json[]=$row;
        $k++;
    }
}
$conn->close();

echo json_encode($json);
?>

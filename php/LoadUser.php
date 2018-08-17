
<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new Connection();
$conn = $conn->conn();
if(isset($_GET['id'])){
    $result = $conn->query("SELECT type_name,sex,type.type_id,full_name,email,address,mobile,user_id FROM `type` JOIN `user` ON type.type_id = user.type_id WHERE user_id = '".$_GET['id']."' ORDER BY user_id DESC ");
}else {
    $result = $conn->query("SELECT type_name,full_name,email,address,mobile,user_id FROM `type` JOIN `user` ON type.type_id = user.type_id ORDER BY user_id DESC");
}
$json = array();

if($result->num_rows){
    $k = 1;
    while($row=$result->fetch_assoc()){
        $json[]=$row;
    }
}
$conn->close();

echo json_encode($json);
?>


<?php
include '../Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT");

$conn = new Connection();
$conn = $conn->conn();
$json = array();
if(isset($_POST['imp_id']) && isset($_POST['col'])) {
    $result = $conn->query("UPDATE `import` SET `".$_POST['col']."`='".date('d/m/Y')."' WHERE `imp_id` = '".$_POST['imp_id']."'");
    $json['msg'] = 'yes';
    $json['name'] = 'Aman';
}else{
    $json['msg'] = 'no';
}
$conn->close();

echo json_encode($json);
?>

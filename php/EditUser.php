
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
    $conn->query("UPDATE `user` SET `type_id`='" . $_POST['type'] . "',`full_name`='" . $_POST['fullname'] . "',`email`='" . $_POST['email'] . "',`address`='" . $_POST['address'] . "', `mobile`='" . $_POST['mobile'] . "', `sex`='" . $_POST['sex'] . "' WHERE `user_id`='" . $_POST['id'] . "'");

    if(!isset($_POST['fileToUpload'])) {
        $target_dir = "uploads/";
        $target_file = $target_dir . $_POST['id'] . '_image.png';

        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            $json['msg'] = "yes";
        } else
            $json['msg'] = "no";
    }else{
        $json['msg'] = "yes";
    }
}else{
    $json['msg'] = "no";
}
$conn->close();
echo json_encode($json);
?>

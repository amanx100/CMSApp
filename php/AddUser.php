
<?php
include './Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT");

$conn = new Connection();
$conn = $conn->conn();
$json = array();

    $conn->query("INSERT INTO `user`(`type_id`, `full_name`, `password`, `email`, `address`, `mobile`) VALUES 
('" . $_POST['type'] . "', '" . $_POST['fullname'] . "', '12345' ,'" . $_POST['email'] . "', '" . $_POST['address'] . "', '" . $_POST['mobile'] . "')");


    $target_dir = "uploads/";
    $target_file = $target_dir . $conn->insert_id . '_image.png';

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $json['msg'] = "yes";
    } else
        $json['msg'] = "no";


    $conn->close();

echo json_encode($json);
?>

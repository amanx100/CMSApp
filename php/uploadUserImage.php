<?php
/**
 * Created by PhpStorm.
 * User: ahosa
 * Date: 2/21/2018
 * Time: 5:15 PM
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT");
header("Content-Type: application/json");

$target_dir = "uploads/";
$target_file = $target_dir . $_POST['imgname'];
$success = array();
if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file))
    $success['msg'] = "success";
else
    $success['msg'] = "not";

echo json_encode($success);
?>
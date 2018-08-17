
<?php
include '../Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new Connection();
$conn = $conn->conn();
if(isset($_GET['id'])){
    $result = $conn->query("SELECT `product_type`.`pro_name`,`product_type`.`CBMPrice`,`product_type`.`WeightPrice`,`user`.`full_name`,`user`.`mobile`,`import`.`Product_Name`,`import`.`tr_no`,`import`.`Post_date`,`import`.`Quantity`,`import`.`Box_id`,`import`.`Weight`,`import`.`CBM`,`import`.`SendByAorS` FROM `product_type` JOIN (`user` JOIN `import` ON `user`.`user_id` = `import`.`user_id`) ON `product_type`.`pro_id` = `import`.`pro_id` WHERE `Post_date` IS NOT NULL AND `Send_date` IS NOT NULL AND `Ship_date` IS NOT NULL AND `Received_date` IS NOT NULL AND `Delivery_date` IS NOT NULL AND (tr_no LIKE '".$_GET['id']."%')");
}else {
    $result = $conn->query("SELECT `product_type`.`pro_name`,`product_type`.`CBMPrice`,`product_type`.`WeightPrice`,`user`.`full_name`,`user`.`mobile`,`import`.`Product_Name`,`import`.`tr_no`,`import`.`Post_date`,`import`.`Quantity`,`import`.`Box_id`,`import`.`Weight`,`import`.`CBM`,`import`.`SendByAorS` FROM `product_type` JOIN (`user` JOIN `import` ON `user`.`user_id` = `import`.`user_id`) ON `product_type`.`pro_id` = `import`.`pro_id` WHERE `Post_date` IS NOT NULL AND `Send_date` IS NOT NULL AND `Ship_date` IS NOT NULL AND `Received_date` IS NOT NULL AND `Delivery_date` IS NOT NULL");
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

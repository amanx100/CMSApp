
<?php
include '../Connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new Connection();
$conn = $conn->conn();

//$result = $conn->query("SELECT *, COUNT(imp_id) AS total FROM (SELECT Product_Name,imp_id FROM (SELECT `import`.`Product_Name`,`import`.`imp_id` FROM `import` WHERE `import`.pro_id = 2) AS t1 JOIN `product_type` ON t1.`Product_Name` != `product_type`.`pro_name` GROUP By imp_id) As P1 GROUP BY Product_Name");
$result = $conn->query("SELECT `import`.`Product_Name`, COUNT(`Product_Name`) as total FROM `import` WHERE `import`.`Product_Name` NOT IN (SELECT `product_type`.`pro_name` FROM `product_type`) GROUP BY `Product_Name`");

$json = array();

if($result->num_rows){
    $k = 1;
    while($row=$result->fetch_assoc()){
        $row['sl'] = $k;
        $json[]=$row;
        $k++;
    }
}
$conn->close();

echo json_encode($json);
?>

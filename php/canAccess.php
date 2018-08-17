<?php
/**
 * Created by PhpStorm.
 * User: ahosa
 * Date: 2/9/2018
 * Time: 11:07 AM
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

session_start();
$arr = array('access' => false);
if(!isset($_SESSION['user']))
    $arr['access'] = true;

echo json_encode($arr);
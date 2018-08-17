<?php
/**
 * Created by PhpStorm.
 * User: ahosa
 * Date: 2/9/2018
 * Time: 10:56 AM
 */

session_start();
echo json_encode(array("name"=>$_SESSION['name']));
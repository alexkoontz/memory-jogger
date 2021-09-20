<?php

$dbServername = "localhost";
$dbUsername = "northcou_dbconnect";
$dbPassword = "5%qq4HNPueG%";
$dbName = "northcou_memory_jogger";

try {
    $conn = mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);
} catch (Exception $e) {
    echo 'Cannot connect to database: ', $e->getMessage(), "\n";
};

?>
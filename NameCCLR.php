<?php
//connect using servername, account username, account password, and database
$db = new mysqli("localhost", "web", "Rm6D?PKBy&K3QhJ!", "CCLR");
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

//Checks to make sure that the name field is filled, then changes the sql statement
// if (!empty($_GET['name'])){
//   $sql = "SELECT * FROM `rcclr2`";
// } else {
//   echo "The name field is required.";
//   $db->close();
//   exit();
// }

//prepare & execute
$sql = "SELECT * FROM `rcclr2`";
$stmt = $db->prepare($sql);
// $LastName = $_GET['name'];
// $stmt->bind_param("sssss", $LastName,$LastName,$LastName,$LastName,$LastName);
$stmt->execute();
//Display the results in an html table
$result = $stmt->get_result();
$db->close();



header("Content-Type: application/json"); // Advise client of response type

$rows = array();
while($r = mysqli_fetch_assoc($result)) { //make the results obj an array
    $rows[] = $r;                           //this returns ALL the results, junk & unused data.
}

echo json_encode($rows); // Write it to the output
?>
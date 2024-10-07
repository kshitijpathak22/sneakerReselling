<?php
$connection = mysqli_connect('localhost','root','','shoeproj');
if(isset($_POST['send'])){
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$request = "insert into ingredient1(username, email, password)
values ('$username', '$email', '$password')";

mysqli_query($connection, $request);

header('location:ingre1.php');
}else{
echo 'something went wrong try again';
}
?>



<?php

 include 'emailconfig.php';
 require_once "Mail.php";
 $skaterName = $_POST["skaterName"];
 $age = $_POST["age"];
 $email_from = $_POST["email"];
 $phone = $_POST["phone"];
 $size = $_POST["size"];
 $notes = $_POST["notes"];
 $preferredName = $_POST["preferredName"];
 $returning = $_POST["returning"];
 $name = $_POST["guardian"];

 $from = "No Reply <noreply@rrderby.org>";
 $to = "info@rrgderby.org";
 $subject = "Juniors Sign Up";
 $body = "Skater Name: ". $skaterName . "\r\nPreferred Name: " . $preferredName . "\r\nAge: " . $age . "\r\nGuardian Name: " . $name . "\r\nContact Email: " . $email_from . "\r\nContact Phone: " . $phone . "\r\nShirt Size: " . $size . "\r\nOther Notes: " . $notes . "\r\nReturning: " . $returning;

 $host = "ssl://smtp.gmail.com";
 $port = "465";
 $username = $emailusername;
 $password = $emailpassword;

 $headers = array ('From' => $from,
 'To' => $to,
 'Subject' => $subject);
 $smtp = Mail::factory('smtp',
 array ('host' => $host,
 'port' => $port,
 'auth' => true,
 'username' => $username,
 'password' => $password));

 if ($skaterName){
 $mail = $smtp->send($to, $headers, $body);
} else {
  header("Location: https://rrderby.org/");
die();
}

 if (PEAR::isError($mail)) {
 echo("<p>" . $mail->getMessage() . "</p>");
 } else {
   header("Location: https://rrderby.org/postsignup.html");
  die();
 }
 ?>

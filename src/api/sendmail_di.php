<?php

 header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 include 'emailconfig.php';
 require_once "Mail.php";

 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $data = (array)json_decode($rest_json);
 $skaterName = $_POST["skaterName"];
 $age = $_POST["age"];
 $email_from = $_POST["email"];
 $phone = $_POST["phone"];
 $size = $_POST["size"];
 $notes = $_POST["notes"];
 $preferredName = $_POST["preferredName"];
 $returning = $_POST["returning"];
 $name = $_POST["guardian"];

 $body = "";
 foreach($data as $field => $response){
     $body = $body . "\r\n" . $field . ": " . $response;
 }



    //Create mail object, send

    require_once "Mail.php";
    global $body;
    $subject = "Juniors Sign Up";
    include 'emailconfig.php';
    $headers = array ('From' => $from,
    'To' => $to,
    'Subject' => $subject);
    $smtp = Mail::factory('smtp',
    array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $emailUsername,
    'password' => $emailPassword));
    $mail = $smtp->send($to, $headers, $body);
    if (PEAR::isError($mail)) {
        echo("<p>" . $mail->getMessage() . "</p>");
        } else {
          
      
        } 

        







 ?>

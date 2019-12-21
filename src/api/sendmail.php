<?php

 header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 include 'emailconfig.php';
 require_once "Mail.php";

 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);


 $to = "info@rrgderby.org";
 $subject = "Juniors Sign Up";
 $body = '';

foreach($_POST as $field => $value){
    $body = $body . "\r\n" . $field . ": " . $value;
}

function sendMail(){

    $headers = array ('From' => $from,
    'To' => $to,
    'Subject' => $subject);
    $smtp = Mail::factory('smtp',
    array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $emailusername,
    'password' => $emailpassword));
     
    if (PEAR::isError($mail)) {
    return "Error: " . $mail->getMessage();

    } else {
     return true; 
     die();
    }

}

sendMail();

 ?>

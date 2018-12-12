<?php

$data = $_POST;

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "iam@shelaghstorla.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error! $recipient, $subject, $formcontent, $mailheader");
echo "Thank you, ".$name."! Your message has been sent!";




?>
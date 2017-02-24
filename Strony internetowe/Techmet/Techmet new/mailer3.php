<?php

$name_of_uploaded_file =basename($_FILES['uploaded_file']['name']);
$formData = $_POST;
getFile( $name_of_uploaded_file, $formData );
function getFile( $filename , $formData ) {

    $temp = explode(".", $_FILES["uploaded_file"]["name"]);

    if ($_FILES["uploaded_file"]["size"] < 20971520)
      {

            sendMailAsAttachment($_FILES["uploaded_file"]["tmp_name"],$_FILES["uploaded_file"]["name"],$formData);
      }
    else
      {
      echo "Invalid file";
      }
}




function prepareEmail( $formData ) {

    // email fields: to, from, subject, and so on
    $recipient = "biley94@gmail.com";
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    $company = trim($_POST["company"]);
    $subject = trim($_POST["subject"]);
    $email_content = "Imię i nazwisko: $name\n";
    $email_content .= "Firma: $company\n\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Wiadomość:\n$message\n"; $formData['email']."\n";
    $headers = "From: $email";

    // boundary
    $semi_rand = md5(time());
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

    // headers for attachment
    $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";

    // multipart boundary
    $email_content .= "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $email_content . "\n\n";
    $email_content .= "--{$mime_boundary}\n";

    $emailData = array (
        'to' => $recipient,
        'from' => $email,
        'company' => $company,
        'subject' => $subject,
        'headers' => $headers,
        'message' => $email_content
    );

    return $emailData;

}


function prepareAttachment( $filename ,$fileorgname) {

    if ($filename == '' || $fileorgname == '') {

            $emailData = prepareEmail( $formData );
    $email_content = $emailData['message'];
    $ok = @mail($emailData['to'], $emailData['subject'], $email_content, $emailData['headers']);
    if ($ok) {
            echo file_get_contents("kontakt.html");
    } else {
            echo "<p>mail could not be sent!</p>";
    }


    } else {

    $attachContent = '';
    $file = fopen($filename,"rb");
    $data = fread($file,filesize($filename));
    fclose($file);
    $cvData = chunk_split(base64_encode($data));
    $attachContent .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$fileorgname\"\n" .
    "Content-Disposition: attachment;\n" . " filename=\"$fileorgname\"\n" .
    "Content-Transfer-Encoding: base64\n\n" . $cvData . "\n\n";
    $attachContent .= "--{$mime_boundary}\n";
    return $attachContent;
    }

}


function sendMailAsAttachment( $filename, $fileorgname, $formData ) {

    $emailData = prepareEmail( $formData );
    $attachContent = prepareAttachment( $filename,$fileorgname );
    $email_content = $emailData['message'].$attachContent;
    $ok = @mail($emailData['to'], $emailData['subject'], $email_content, $emailData['headers']);
    if ($ok) {
            echo file_get_contents("kontakt.html");
    } else {
            echo "<p>mail could not be sent!</p>";
    }
}

?>

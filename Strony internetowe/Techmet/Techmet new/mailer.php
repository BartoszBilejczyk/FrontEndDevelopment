<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $company = trim($_POST["company"]);
        $subject = trim($_POST["subject"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            echo "Wystąpił problem z wysłaniem wiadomości. Wyślij wiadomość ponownie.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "biley94@gmail.com";

        // Build the email content.
        $email_content = "Imię i nazwisko: $name\n";
        $email_content .= "Firma: $company\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Wiadomość:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            echo  file_get_contents("kontakt.html");
        } else {
            // Set a 500 (internal server error) response code.
            echo "Coś poszło nie tak i nie mogliśmy wysłać wiadomości. Wyślij ponownie.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Coś poszło nie tak i nie mogliśmy wysłać wiadomości. Wyślij ponownie.";
    }

?>

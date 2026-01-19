<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

function verifyRecaptcha($token) {
    $secret = '6LcfUMIpAAAAAP5DsIWlXCj3SBXpcC0U0ukhD02V';

    $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $token);
    $result = json_decode($response, true);

    return $result['success'] ?? false;
}

try {
    // Get form data
    $recaptchaToken = $_POST['recaptcha_token'] ?? '';
    $name = $_POST['nimi'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['telefon'] ?? '';
    $message = $_POST['paring'] ?? '';

    // Validate required fields
    if (empty($name) || empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Nimi ja e-mail on kohustuslikud väljad']);
        exit();
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Palun sisestage kehtiv e-mail']);
        exit();
    }

    // Verify reCAPTCHA
    if (empty($recaptchaToken)) {
        http_response_code(400);
        echo json_encode(['error' => 'reCAPTCHA token puudub']);
        exit();
    }

    if (!verifyRecaptcha($recaptchaToken)) {
        http_response_code(400);
        echo json_encode(['error' => 'reCAPTCHA kontroll ebaõnnestus. Palun proovige uuesti.']);
        exit();
    }

    // Prepare email content
    $emailContent = "Uus kontakti päring eestimetsamaakler.ee-st:\n\n";
    $emailContent .= "Nimi: " . $name . "\n";
    $emailContent .= "E-mail: " . $email . "\n";
    $emailContent .= "Telefon: " . ($phone ?: 'Ei täidetud') . "\n";
    $emailContent .= "Päringu sisu: " . ($message ?: 'Ei täidetud') . "\n\n";
    $emailContent .= "Saadetud: " . date('d.m.Y H:i:s') . "\n";

    // Send email
    $to = 'karlsimmer@gmail.com';
    $subject = 'Kontakt eestimetsamaakler.ee';
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $emailContent, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Vorm on edukalt saadetud! Vastame teile võimalikult kiiresti.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'E-maili saatmisel tekkis viga. Palun proovige uuesti.']);
    }

} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Vormi saatmisel tekkis viga. Palun proovige uuesti.']);
}
?>
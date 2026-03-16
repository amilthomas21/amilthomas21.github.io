<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get form data
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate
    $errors = [];

    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required.";
    }

    if (empty($subject)) {
        $errors[] = "Subject is required.";
    }

    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    if (empty($errors)) {
        // Success - in real project you would send email here
        echo json_encode([
            'status' => 'success',
            'message' => 'Thank you ' . $name . '! Your message has been received.'
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'errors' => $errors
        ]);
    }

} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
?>
```

---

## 📁 Folder Structure
```
portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── php/
    └── contact.php
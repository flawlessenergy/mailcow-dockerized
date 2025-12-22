<?php
// Custom header for AI-themed Mailcow
function inject_ai_headers() {
    echo '
    <!-- AI Neural Network Favicons -->
    <link rel="icon" type="image/x-icon" href="/css/themes/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/css/themes/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/css/themes/icons/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/css/themes/icons/apple-touch-icon.png">

    <!-- AI Theme Meta -->
    <meta name="theme-color" content="#667eea">
    <meta name="application-name" content="Mailcow AI">
    <meta name="description" content="Neural Network Powered Email Platform">

    <!-- Custom AI CSS -->
    <link rel="stylesheet" href="/css/build/ai-icons.css">

    <!-- AI Animated Background -->
    <style>
        .ai-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.05;
            background:
                radial-gradient(circle at 20% 80%, rgba(54, 209, 220, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 64, 129, 0.2) 0%, transparent 50%);
            animation: ai-pulse 20s infinite alternate;
        }

        @keyframes ai-pulse {
            0% { opacity: 0.03; }
            100% { opacity: 0.07; }
        }
    </style>
    ';
}
?>

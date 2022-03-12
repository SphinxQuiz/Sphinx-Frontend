<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/profile.css" />
    <link rel="stylesheet" href="css/navbar.css" />


    <!-- Custom google dropdown -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

   
    <title>Profile</title>
</head>
<body>
    <?php include "includes/navbar.php"?>
    <div class="centered">
        <div class="container">
            <h1 class="notranslate" id="profile-title">Bedrock</h1>
            <div class="ligne">
                <h2 class="label">Elo : 210</h2>
                <h2 class="label">Ratio : 0.8</h2>
            </div>
            <h2 class="label">Max streak : </h2>
            <div id="google_translate_element"></div>
            
        </div>
    </div>
</body>
<script type="text/javascript">
        function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        }
    </script> 
<script src = "js/auth.js"></script>

</html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/leaderboard.css" />
    <link rel="stylesheet" href="css/navbar.css" />


    <!-- Custom google dropdown -->
    <script type="text/javascript">

    var duplicate_google_translate_counter = 0;//this stops google adding button multiple times

    function googleTranslateElementInit() {
    if (duplicate_google_translate_counter == 0) {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
    duplicate_google_translate_counter++;
    }

    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
   
    <title>Profile</title>
</head>
<body onload="loadData()">
    <?php include "includes/navbar.php"?>
    <div id="main-div" class="centered">
        <div class="container">
            <h1 class="notranslate" id="leaderboardTitle">Leaderboard</h1>
            <div id="leaderboardDiv"></div>
            
        <div id ="loading-div" class="gif-div">
            <img id = "loading-gif" src="assets/loading-gif.gif" alt="loading gif">
        </div>
    </div>
</body>

<script src = "js/auth.js"></script>
<script src = "js/leaderboard.js"></script>

</html>
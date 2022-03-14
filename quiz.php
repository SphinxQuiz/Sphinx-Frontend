<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sphinx</title>
    <link rel="stylesheet" href="css/quiz.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/navbar.css"/>



    <!-- Scripts -->
    <script src="./js/loadFile.js"></script> 

    <script type="text/javascript">

    var duplicate_google_translate_counter = 0;//this stops google adding button multiple times

    function googleTranslateElementInit() {
      if (duplicate_google_translate_counter == 0) {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      }
      duplicate_google_translate_counter++;
    }

    </script>
        <audio id="audio" src="https://artlist.io/song/63632/mobile-game---interface-pitch-down-bleep"></audio>

    
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

  </head>


    <?php include "./includes/navbar.php"?>
    <body onload='displayData()'>
      
    <div id = "main-div" class="centered">
      


    <h2 id="question"></h2>
      <h3 id="categorie"></h3>
      <h4 id="difficulty-tag"></h4>
      <div class="centered">
        <button id="next-question" onclick="location.reload();">Next question</button>
      </div>
      <div class="centered button-div">
        <div id="ligne1" class="ligne"><button class="quiz-button hoverScale-up">Reponse A</button><button class="quiz-button hoverScale-up">Reponse B</button></div>
        <div id="ligne2" class="ligne"><button class="quiz-button hoverScale-up">Reponse A</button><button class="quiz-button hoverScale-up">Reponse B</button></div>
      </div>
    </div>
    <div id ="loading-div" class="gif-div">
        <img id = "loading-gif" src="assets/loading-gif.gif" alt="loading gif">
    </div>

    

  </body>
  <script src = "js/auth.js"></script>
  <script src="js/trivial-api.js"></script>

</html>

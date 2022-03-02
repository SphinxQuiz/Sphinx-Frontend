<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sphinx</title>
    <link rel="stylesheet" href="css/navbar.css" />
    <link rel="stylesheet" href="css/quiz.css" />
    <link rel="stylesheet" href="css/style.css" />


    <!-- Scripts --> 

  </head>
  <body onload="displayData()">
    <?php include "includes/navbar.php"?>

    <div id = "main-div" class="centered">
    <h2 id="question"></h2>
      <h3 id="categorie"></h3>
      <h4 id="difficulty-tag"></h4>
      <div class="centered button-div">
        <div id="ligne1" class="ligne"><button class="quiz-button">Reponse A</button><button class="quiz-button">Reponse B</button></div>
        <div id="ligne2" class="ligne"><button class="quiz-button">Reponse A</button><button class="quiz-button">Reponse B</button></div>
      </div>
    </div>
    <div id ="loading-div" class="gif-div">
        <img id = "loading-gif" src="assets/loading-gif.gif" alt="loading gif">
    </div>

  </body>
  <script src="js/trivial-api.js"></script>

</html>

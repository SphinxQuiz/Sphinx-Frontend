<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sphinx</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/navbar.css" />
    <link rel="stylesheet" href="css/quiz.css" />

    <!-- Scripts --> 
    <!-- CDN-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
  </head>
  <body onload="displayData()">
    <?php include "includes/navbar.php"?>

    <div class="centered">
    <h2 id="question"></h2>
      <h3 id="categorie"></h3>
      <h4 id="difficulty-tag"></h4>

    </div>

  </body>
  <script src="js/trivial-api.js"></script>

</html>

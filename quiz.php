<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <title>Sphinx</title>
    <link rel="stylesheet" href="css/quiz.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/navbar.css"/>

    <link rel="manifest" href="manifest.json"/> 


    <!-- icons --> 
    <link rel="icon" type="image/png" sizes="196x196" href="./assets/icons/favicon-196.png">
    <link rel="apple-touch-icon" href="./assets/icons/apple-icon-180.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2388-1668.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2048-1536.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2224-1668.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2160-1620.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2778-1284.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2532-1170.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2436-1125.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2688-1242.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1792-828.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-2208-1242.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1334-750.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="./assets/icons/apple-splash-1136-640.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">

    <!-- Scripts 
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

    
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
-->
<script type="text/javascript">

  function googleTranslateElementInit() {

      googleTranslateEl = new google.translate.TranslateElement({pageLanguage: 'en',
      includedLanguages: 'af,ar,de,en,es,fr,hu,it,ja,no,ro,ru,tr,zh-CN',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false}, 'google_translate_element');
    


      var removePopup = document.getElementById('goog-gt-tt');
      removePopup.parentNode.removeChild(removePopup);
  }

  function loadGoogleTranslate() {
    var googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.async = true;
    googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild(googleTranslateScript);
  }
</script>

<audio id="audio" src="./assets/bad.wav"></audio>



  </head>


    <?php include "./includes/navbar.php"?>

    <div class="centered" id="play-div">

      <div id="rules">
      <h1 class="rule-title">📖 The rules : </h1>

        <h2>You will have 15 seconds to choose the right answer ✅ for the question asked</h2>
        <h2>If you don't answer within the allotted time you loose points 📉</h2>

        <h1 class="rule-title">🎯 Points : </h1>
        <ul>
          <li><h2>📕 Hard question : <strong>30 points</strong></h2></li>
          <li><h2>📘 Medium question : <strong>20 points</strong></h2></li>
          <li><h2>📗 Easy question : <strong>10 points</strong></h2></li>

        </ul>

      </div>



      <button id = "play-button" onclick="start()">Play !</button>
    </div>
    

      
    <div id = "main-div" class="centered">
    <h2 id="question" class="noselect"></h2>
      <h3 id="categorie"></h3>
      <h4 id="difficulty-tag"></h4>
      <div class="centered">
        <button id="next-question" onclick="reset()">Next question</button>
      </div>
      <div class="centered button-div">
        <div id="ligne1" class="ligne"><button class="quiz-button hoverScale-up noselect">Reponse A</button><button class="quiz-button hoverScale-up noselect">Reponse B</button></div>
        <div class="ligne">
          <div id="clock">
            <span class="notranslate" id="seconds">20</span>
          </div>
        </div>
        <div id="ligne2" class="ligne"><button id="boolean-btn-1" class="quiz-button hoverScale-up noselect">Reponse A</button><button id="boolean-btn-2" class="quiz-button hoverScale-up noselect">Reponse B</button></div>
      </div>
    </div>
    <div id ="loading-div" class="gif-div">
        <img id = "loading-gif" src="assets/loading-gif.gif" alt="loading gif">
    </div>

    

  </body>
  <script type="text/javascript" src = "js/auth.js"></script>
  <script type="text/javascript" src = "js/apiurl.js"></script>
  <script type="text/javascript" src="js/trivial-api.js"></script>


</html>

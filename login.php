<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup</title>
    <link rel="stylesheet" href="./css/index.css" />
    <link rel="stylesheet" href="./css/sign-form.css" />
    <link rel="stylesheet" href="./css/style.css" />




    <!-- Scripts --> 
    <!-- CDN-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
  </head>
  <body class="background-index">
  

    <div class="centered">

      <div id="alertBox" class="alert">
          <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
          <p id="alertText">This is an alert box.<p>
      </div>

      <a class = "hoverScale-up" href="./index.php"><h1 class="logo-index">Sphinx</h1></a>
      <form action="" method="post">
        <div class="centered">


            <div class="form-item">
                <h1 class="form-label">Email</h1>
                <input id= "emailInput" class="form-input"type="text" placeholder="Enter Email" name="email" required>  
            </div>
            <div class="form-item">
                <h1 class="form-label">Password</h1>
                <input id= "passwordInput" class="form-input passInput" type="password" placeholder="Enter Password" name="password" required>  
                <button class="hideButton" type="button" onclick ="passwordReveal()" ><i class="fa-solid fa-eye"></i></button>
              </div>
        </div>
      </form>
      <button id = "submitButton" type="none" class = "form-submit hoverScale-up" onclick="login()">Login</button>
      <a href="./signup.php"><p>Create an account</p></a>

    </div>

  </body>
  <script src="js/login.js"></script>
  <script src="./js/alert.js"></script>
  <script src="js/gofullscreen.js"></script>


</html>

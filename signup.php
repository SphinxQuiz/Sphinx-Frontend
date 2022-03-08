<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="css/sign-form.css" />



    <!-- Scripts --> 
    <!-- CDN-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
  </head>
  <body class="background-index">

    <div class="centered">
      <h1 class="logo-index">Sphinx</h1>
      <form action="http://localhost:3000/api/auth/signup" method="post">
        <div class="centered">
            <div class="form-item">
                <h1 class="form-label">Username</h1>
                <input class="form-input"type="text" placeholder="Enter Username" name="username" required>  
            </div>
            <div class="form-item">
                <h1 class="form-label">Email</h1>
                <input class="form-input"type="text" placeholder="Enter Email" name="email" required>  
            </div>
            <div class="form-item">
                <h1 class="form-label">Password</h1>
                <input class="form-input"type="text" placeholder="Enter Password" name="password" required>  
            </div>

            <button class = "form-submit" type="submit">Login</button>
        </div>
      </form>
    </div>

  </body>
  <script src="js/trivial-api.js"></script>

</html>

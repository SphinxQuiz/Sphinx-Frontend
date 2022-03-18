xhr = new XMLHttpRequest()

const username = document.getElementById("usernameInput")
const password = document.getElementById("passwordInput")

const apiUrl = "https://sphinx-backend.herokuapp.com"
//const apiUrl = "http://localhost:3000"

const urlLogin = apiUrl + "/api/auth/login";
let passwordShow = false



let nb = 1;


function printDots(element) {
    element.innerText = ""
    for(let i = 0; i<nb; i ++){
        element.innerText += "."
    }
    nb = nb == 3 ? 1 : nb+1

}




function passwordReveal(){
    if(passwordShow == false){
        password.type ="text"
    }
    else if (passwordShow == true){
        password.type = "password"
    }
    passwordShow = !passwordShow

}


function login(){
    if(!username.value|| !password.value){
        showMessage("Veuillez renseigner tout les champs")

    }
    else if (username.value != null && password != null){
        let oldText = submitButton.innerText

        printDots(submitButton)
        let timeout = setInterval(() => printDots(submitButton), 800) 

        xhr.open("POST", urlLogin, true)

        xhr.addEventListener("load", () => {
            clearInterval(timeout)
            if(xhr.status != 200){
                let message = JSON.parse(xhr.responseText)
                showMessage(message.error);
            }
            else{
                let message = JSON.parse(xhr.responseText)
                localStorage.setItem("token", message.token)
                window.location.replace("./quiz.php")
            }
        })

        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.send(JSON.stringify({"username": username.value, "password": password.value}))

    }

}


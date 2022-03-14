xhr = new XMLHttpRequest()

const username = document.getElementById("usernameInput")
const email = document.getElementById("emailInput")
const password = document.getElementById("passwordInput")
const passwordConfirm = document.getElementById("confirmPasswordInput")

let password1Show = false
let password2Show = false



const urlSignup = apiUrl + "/api/auth/signup";

function passwordReveal(secondOne){
    if(secondOne){
        if(password2Show == false){
            passwordConfirm.type ="text"
        }
        else if (password2Show == true){
            passwordConfirm.type = "password"
        }
        password2Show = !password2Show

    }
    else {
        if(password1Show == false){
            password.type ="text"
        }
        else if (password1Show == true){
            password.type = "password"
        }
        password1Show = !password1Show

    }

}

function signup(){
    if(!username.value || !email.value || !password.value || !passwordConfirm.value){
        showMessage("Veuillez renseigner tout les champs")
    }
    else if (passwordConfirm.value != password.value){
        showMessage("Les mots de passes sont differents")
    }
    else{
        xhr.open("POST", urlSignup, false)
        xhr.addEventListener("load", () => {
            if(xhr.status != 201){
                let message = JSON.parse(xhr.responseText)
                showMessage(message.error);
            }
            else if (xhr.status == 201){
                let message = JSON.parse(xhr.responseText)
                sessionStorage.setItem("token", message.token)
                showMessage(message.message, true)
                console.log("done")
                //window.location.replace("./quiz.php")
            }
        })

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({"username": username.value, "email": email.value, "password": password.value}))

    }

}


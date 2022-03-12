xhr = new XMLHttpRequest()

const username = document.getElementById("usernameInput")
const email = document.getElementById("emailInput")
const password = document.getElementById("passwordInput")
const passwordConfirm = document.getElementById("confirmPasswordInput")



const urlSignup = apiUrl + "/api/auth/signup";


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


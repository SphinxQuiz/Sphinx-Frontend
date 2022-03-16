xhr = new XMLHttpRequest()

const email = document.getElementById("emailInput")
const password = document.getElementById("passwordInput")


let nb = 1;


function printDots(element) {
    console.log(element)
    element.innerText = ""
    for(let i = 0; i<nb; i ++){
        element.innerText += "."
    }
    nb = nb == 3 ? 1 : nb+1

}


const urlLogin = apiUrl + "/api/auth/login";

let passwordShow = false

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
    if(!email.value|| !password.value){
        showMessage("Veuillez renseigner tout les champs")

    }
    else if (email.value != null && password != null){
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
                sessionStorage.setItem("token", message.token)
                window.location.replace("./quiz.php")
            }
        })

        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.send(JSON.stringify({"email": email.value, "password": password.value}))

    }

}


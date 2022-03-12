xhr = new XMLHttpRequest()

const email = document.getElementById("emailInput")
const password = document.getElementById("passwordInput")

const alertBox = document.getElementById("alertBox")
const alertText = document.getElementById("alertText")


const urlLogin = apiUrl + "/api/auth/login";


function login(){
    if(!email.value|| !password){
        showMessage("Veuillez renseigner tout les champs")
        console.log(email.value)
        console.log(password.value)

    }
    else if (email.value != null && password != null){
        xhr.open("POST", urlLogin, false)
        xhr.addEventListener("load", () => {
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

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({"email": email.value, "password": password.value}))

    }

}

function showMessage(message){
    alertBox.style.visibility = "visible"
    alertText.innerText = message
}
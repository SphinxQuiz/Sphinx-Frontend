xhr = new XMLHttpRequest()

const username = document.getElementById("usernameInput")
const password = document.getElementById("passwordInput")

const loginButton = document.getElementById("submitButton")


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
                localStorage.setItem("username", message.username)
                window.location.replace("./profile.php")
            }
        })

        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.send(JSON.stringify({"username": username.value, "password": password.value}))

    }

}


function coolBorder(element){
    val1 = randomIntFromInterval(40, 60)
    val2 = randomIntFromInterval(40, 60)
    val3 = randomIntFromInterval(40, 60)
    val4 = randomIntFromInterval(40, 60)
    val5 = randomIntFromInterval(40, 60)
    val6 = randomIntFromInterval(40, 60)
    val7 = randomIntFromInterval(40, 60)
    val8 = randomIntFromInterval(40, 60)
  
  
    element.style.borderRadius = `${val1}% ${val2}% ${val3}% ${val4}% / ${val5}% ${val6}% ${val7}% ${val8}%` 
  }
  

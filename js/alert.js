
const alertBox = document.getElementById("alertBox")
const alertText = document.getElementById("alertText")


function showMessage(message, green = false){
    if(green){
        alertBox.style.backgroundColor = "green"
    }
    else{
        alertBox.style.backgroundColor = "red"

    }
    alertBox.style.visibility = "visible"
    alertText.innerText = message

}


const apiUrl = "http://localhost:3000"


const profileTitle = document.getElementById("profileTitle")
const elo = document.getElementById("elo")
const ratio = document.getElementById("ratio")
const main_div = document.getElementById("main-div");
const animation = document.getElementById("loading-div");



function logout(){
    sessionStorage.clear()
    window.location.replace("../index.php")
}

function loadData(){
    let xhr = new XMLHttpRequest()

    let urlProfile = apiUrl + "/api/auth/getInfos"

    xhr.open("POST", urlProfile, false)

    xhr.setRequestHeader("Authorization", sessionStorage.getItem("token"))

    showAnimation();


    xhr.addEventListener("load", () => {
    hideAnimation()
    if (xhr.status != 200) { // On check si on a pas recu d'erreur
        alert(`Error ${xhr.status}: ${xhr.statusText}`); 
        window.location.replace("../index.php")
      }
      else{
        let result = JSON.parse(xhr.responseText)

        profileTitle.innerText = result.username
        elo.innerText = "Score : " + result.score
        
        let ratioCalcul = result.goodAnswer / result.badAnswer

        ratio.innerText = "Ratio :" + ratioCalcul.toFixed(2)

      }
    })


    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let token = sessionStorage.getItem("token")
    xhr.send(JSON.stringify({token}))

}


// Show the loading animation
function showAnimation() {
    main_div.style.display = "none";
    animation.style.display = "block";
  }
  
  // Hide the loading animation
  function hideAnimation() {
    main_div.style.display = "block";
    animation.style.display = "none";
  }
  
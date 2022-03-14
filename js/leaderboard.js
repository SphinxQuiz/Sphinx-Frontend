const apiUrl = "http://localhost:3000"


const leaderboardDiv = document.getElementById("leaderboardDiv")
const main_div = document.getElementById("main-div");
const animation = document.getElementById("loading-div");



function logout(){
    sessionStorage.clear()
    window.location.replace("../index.php")
}

function loadData(){
    let xhr = new XMLHttpRequest()

    let urlProfile = apiUrl + "/api/auth/getLeaderboard"

    xhr.open("GET", urlProfile, false)

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

        console.log(result)

        for(let i = 0; i < result.length; i ++){
          let user = document.createElement("h2")
          user.classList.add("userLine")
          user.innerText = i + 1 + ". " + result[i].username + " : " + result[i].score
          leaderboardDiv.appendChild(user)
        }


      }
    })


    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()

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
  
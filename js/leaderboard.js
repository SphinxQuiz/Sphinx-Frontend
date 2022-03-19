

const leadeboard = document.getElementById("leaderboardBody")
const table = document.getElementById("tableId")
const main_div = document.getElementById("main-div");
const animation = document.getElementById("loading-div");



function logout(){
    localStorage.clear()
    window.location.replace("../index.php")
}

function loadData(){
    let xhr = new XMLHttpRequest()

    let urlProfile = apiUrl + "/api/auth/getLeaderboard"

    xhr.open("POST", urlProfile, false)
    xhr.setRequestHeader("Authorization", localStorage.getItem("token"))

    showAnimation();


    xhr.addEventListener("load", () => {
    hideAnimation()
    if (xhr.status != 200) { // On check si on a pas recu d'erreur
        alert(`Error ${xhr.status}: ${xhr.statusText}`); 
        window.location.replace("../index.php")
      }
      else{

        let result = JSON.parse(xhr.responseText)

        let tableBody = document.getElementById('tableBody')
        table.appendChild(tableBody)


        for(let i = 0; i < result.length; i ++){     
          

          let trBody = document.createElement("tr")
          trBody.classList.add("row")
          tableBody.appendChild(trBody)
          
          let rank = document.createElement("td")
          rank.classList.add("cell")
          rank.classList.add("notranslate")
          if(i + 1 == 1){
            rank.innerText = "🥇"

          }
          else if (i  + 1 == 2){
            rank.innerText = "🥈"

          }
          else if(i  + 1 == 3){
            rank.innerText = "🥉"
          }
          else{
            rank.innerText = i + 1
          }

          let score = document.createElement("td")
          score.classList.add("cell")
          score.classList.add("notranslate")

          score.innerText = result[i].score


          let username = document.createElement("td")
          username.classList.add("cell")
          username.classList.add("notranslate")

          username.innerText = result[i].username
          if(result[i].username == localStorage.getItem("username")){
            trBody.style.backgroundColor = "#f2f0c2"
          }

          let ratio = document.createElement("td")
          ratio.classList.add("cell")
          let ratioCalcul;

          let maxStreak = document.createElement("td")
          maxStreak.classList.add("cell")
          maxStreak.classList.add("notranslate")
          maxStreak.innerText = result[i].maxStreak

          if(result[i].goodAnswer == 0 || result[i].badAnswer == 0 ){
            ratioCalcul = 1
          }
          else{
            ratioCalcul = result[i].goodAnswer / result[i].badAnswer
          }

          ratio.innerText = ratioCalcul.toFixed(2)

          trBody.appendChild(rank)
          trBody.appendChild(score)
          trBody.appendChild(username)
          trBody.appendChild(ratio)
          trBody.appendChild(maxStreak)

          tableBody.appendChild(trBody)
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
  
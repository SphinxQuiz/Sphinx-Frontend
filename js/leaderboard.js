const apiUrl = "http://localhost:3000"


const leadeboard = document.getElementById("leaderboardBody")
console.log(leaderboardBody)
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

        // The table head


        let table = document.createElement("table")
        leadeboard.appendChild(table)
        
        let tableHead = document.createElement("thead")
        table.appendChild(trHead)
        let trHead = document.createElement("tr")

        let thRank = document.createElement("th")
        thRank.innerText = "Rank" 
        trHead.appendChild(thRank)

        let thUsername = document.createElement("th")
        thUsername.innerText = "Username"
        trHead.appendChild(thUsername)

        let thRatio = document.createElement("th")
        thRatio.innerText = "Ratio"
        trHead.appendChild(thRantio)

        let thMax = document.createElement("th")
        thMax.innerText = "Max streak"
        trHead.appendChild(thMax)




        let result = JSON.parse(xhr.responseText)


        for(let i = 0; i < result.length; i ++){     
          
          let tr = document.createElement("tr")
          
          let rank = document.createElement("td")
          rank.innerText = i

          let username = document.createElement("td")
          username.innerText = result[i].username

          let ratio = document.createElement("td")
          let ratioCalcul = result[i].goodAnswer / result[i].badAnswer
          ratio.innerText = ratioCalcul

          tr.appendChild(rank)
          tr.appendChild(username)
          tr.appendChild(ratio)

          leaderboardBody.appendChild(tr)

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
  
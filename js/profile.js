

const profileTitle = document.getElementById("profileTitle")
const elo = document.getElementById("elo")
const ratio = document.getElementById("ratio")
const maxStreak = document.getElementById("maxStreak")
const currentStreak = document.getElementById("currentStreak")
const total = document.getElementById("totalQ")

const main_div = document.getElementById("main-div");
const animation = document.getElementById("loading-div");

const profileB = document.getElementById("profile-background")



function logout(){
    localStorage.clear()
    window.location.replace("../index.php")
}

function loadData(){
    let xhr = new XMLHttpRequest()

    let urlProfile = apiUrl + "/api/auth/getInfos"

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
        result = result[0]
        let ratioCalcul;

        if(result.goodAnswer == 0 || result.badAnswer == 0 ){
          ratioCalcul = 1
        }
        else{
          ratioCalcul = result.goodAnswer / result.badAnswer
        }


        val1 = randomIntFromInterval(10, 90)
        val2 = randomIntFromInterval(10, 90)
        val3 = randomIntFromInterval(10, 90)
        val4 = randomIntFromInterval(10, 90)
        val5 = randomIntFromInterval(10, 90)
        val6 = randomIntFromInterval(10, 90)
        val7 = randomIntFromInterval(10, 90)
        val8 = randomIntFromInterval(10, 90)


        profileB.style.borderRadius = `${val1}% ${val2}% ${val3}% ${val4}% / ${val5}% ${val6}% ${val7}% ${val8}%`

        profileTitle.innerText = result.username
        elo.innerText = "💯 Score : " + result.score
        
        ratioCalcul = result.goodAnswer / result.badAnswer

        totalNumber = result.goodAnswer + result.badAnswer
        total.innerText = "📚 Total Questions : " + totalNumber

        ratio.innerText = "📊 Ratio : " + ratioCalcul.toFixed(2)

        maxStreak.innerText = "🔥 Max streak : " + result.maxStreak

        currentStreak.innerText = "🎏 Current streak : " + result.currentStreak

      }
    })


    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let token = localStorage.getItem("token")
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

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
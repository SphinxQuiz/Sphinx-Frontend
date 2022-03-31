const profileTitle = document.getElementById("profileTitle")
const elo = document.getElementById("elo")
const ratio = document.getElementById("ratio")
const maxStreak = document.getElementById("maxStreak")
const currentStreak = document.getElementById("currentStreak")
const total = document.getElementById("totalQ")
const imgMute = document.getElementById("mute")
const main_div = document.getElementById("main-div");
const animation = document.getElementById("loading-div");

const profileB = document.getElementById("profile-background")

if(localStorage.getItem("sound") == "false"){
  imgMute.src = "../assets/muted.png"
}
else{
  imgMute.src = "../assets/unmuted.png"
}

imgMute.addEventListener("click", ()=> {
  console.log(localStorage.getItem("sound"))
  if(localStorage.getItem("sound") == "false"){
    console.log("test")
    localStorage.setItem("sound", true)
    imgMute.src = "../assets/unmuted.png"

  }
  else if (localStorage.getItem("sound") == "true"){
    localStorage.setItem("sound", false)
    imgMute.src = "../assets/muted.png"

  }
})



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

        coolBorder(profileB)
        profileB.style.backgroundColor = `rgba(${randomIntFromInterval(50, 225)},${randomIntFromInterval(50, 225)},${randomIntFromInterval(50, 225)}, 0.5)`
        imgMute.style.fill = `rgba(${randomIntFromInterval(50, 225)},${randomIntFromInterval(50, 225)},${randomIntFromInterval(50, 225)}, 0.5)`

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
  
  function coolBorder(element){
        val1 = randomIntFromInterval(20, 80)
        val2 = randomIntFromInterval(20, 80)
        val3 = randomIntFromInterval(20, 80)
        val4 = randomIntFromInterval(20, 80)
        val5 = randomIntFromInterval(20, 80)
        val6 = randomIntFromInterval(20, 80)
        val7 = randomIntFromInterval(20, 80)
        val8 = randomIntFromInterval(20, 80)


        element.style.borderRadius = `${val1}% ${val2}% ${val3}% ${val4}% / ${val5}% ${val6}% ${val7}% ${val8}%` 
  }
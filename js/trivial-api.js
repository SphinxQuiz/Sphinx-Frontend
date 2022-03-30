



// Html elements
const categorie_label = document.getElementById("categorie");
const difficulty_tag_label = document.getElementById("difficulty-tag");
const question_label = document.getElementById("question");
const buttons = document.getElementsByClassName("quiz-button");
const ligne1 = document.getElementById("ligne1");
let questionList = [];
const animation = document.getElementById("loading-div");
const main_div = document.getElementById("main-div");
const next_button = document.getElementById("next-question");
const clock = document.getElementById("clock");
const playButton = document.getElementById("play-button")
const playDiv = document.getElementById("play-div")




const goodAudio = new Audio("./assets/good.wav")
const badAudio = new Audio("./assets/bad.wav")
const clockAudio = new Audio("./assets/clock.wav")

clockAudio.muted = true

let questionType;
let difficulty = "";
let id;

let timeLeft;
let clockTimeout;
let timeout;

coolBorder(playButton)

let r;

const xhr = new XMLHttpRequest()
const xmlAnswer = new XMLHttpRequest()

let whichButton;
let oldText;
let timeouted;
let nb = 1;


function printDots(element) {
    element.innerText = ""
    for(let i = 0; i<nb; i ++){
        element.innerText += "."
    }
    nb = nb == 3 ? 1 : nb+1

}

// Show the loading animation
function showAnimation() {
  main_div.style.display = "none"
  animation.style.display = "block";
}

// Hide the loading animation
function hideAnimation() {
  main_div.style.display = "block";
  animation.style.display = "none";
}

function start(){
  playDiv.style.display = "none"
  playButton.style.display = "none"
  reset()
}

let googleElements;
let googleElements1;
let googleElements2;


function reset(){

  googleElements = Array.from(document.querySelectorAll(".goog-te-menu-frame"))
  googleElements1 = Array.from(document.querySelectorAll(".skiptranslate"))
  googleElements2 = Array.from(document.querySelectorAll(".goog-te-spinner-pos"))

  

  googleElements.forEach(e => {
    e.remove()
  })

  googleElements1.forEach(e => {
    e.remove()
  })  
  googleElements2.forEach(e => {
    e.remove()
  })

  loadGoogleTranslate()

  cloackTimeout = "null"
  document.getElementById("seconds").innerHTML = "20"

  document.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
    button.classList.add("hoverScale-up");
    button.classList.remove("notranslate")
    button.style.backgroundColor = "blueviolet"
  })


  next_button.style.backgroundColor = "grey"
  next_button.style.display ="none"
  categorie_label.style.display ="block"
  clock.style.border = "2px solid blueviolet"
  ligne1.style.display = "flex";

  displayData()

}

// Retrieve and display data on the page
async function displayData() {

  
  const url = apiUrl + "/api/question/getOne";

    showAnimation();

    xhr.open("GET", url, false)

    xhr.setRequestHeader("Authorization", localStorage.getItem("token"))
    
      xhr.send()


}

xhr.addEventListener("load", () => {

  clockAudio.muted = false
  clockAudio.play()



  if (xhr.status != 200) { // On check si on a pas recu d'erreur
    alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    window.location.replace("../index.php")
  } else { 
    setTimeout(countdown, 1000);

    r = JSON.parse(xhr.responseText)

    id = r.id

    categorie_label.innerText = "Categorie - " + r.category;

    if(r.type == "multiple"){
      if(r.category == "Entertainment: Video Games" || r.category == "Entertainment: Musicals & Theatres" || r.category == "Entertainment: Music" || r.category == "Entertainment: Television"  || r.category == "Entertainment: Cartoon & Animations" || r.category == "Entertainment: Japanese Anime & Manga" ){
        buttonNoTranslate()
      }
    }
      timeLeft = 20
    



    difficulty = r.difficulty
    difficulty_tag_label.innerText = "Difficulty: " + difficulty;

    let questionText = htmlEntities(r.question);
    question_label.innerText = questionText;

    questionList = r.tabSend;
    buttonFill(r.type);
    hideAnimation();

    }
  });

function buttonNoTranslate(){
  if(questionType == "multiple"){
    for (let b of buttons) {
      b.classList.add("notranslate")
    }
  }

}

function buttonFill(type) {
  questionType = type;
  if (type === "multiple") {
    let i = 0;
    for (let b of buttons) {
      b.innerText = htmlEntities(questionList[i]);
      b.value = questionList[i];
      i++;
    }
  } else{
    ligne1.style.display = "none";
    buttons[3].value = "False";
    buttons[3].innerText = "false";
    buttons[2].value = "True";
    buttons[2].innerText = "true";


  }
}

function htmlEntities(str) {
  return String(str)

    .replace(/&Iacute/g, "í")
    .replace(/&deg/g, "°")
    .replace(/&Delta/g, "Δ")
    .replace(/&aring/g, "å")
    .replace(/&rdquo/g, "”")
    .replace(/&eacute;/g, "é")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&ouml;/g, "ö")
    .replace(/&diviser;/g, "/")
    .replace(/&rsquo;/g, "’");
}

document.querySelectorAll(".quiz-button").forEach((button) => {
  button.addEventListener("click", (b) => {
    timeLeft = -1
    if(clockTimeout != null){
      clearTimeout(clockTimeout)
    }
    reveal(button)
  });
});

function disableButtons() {
  document.querySelectorAll(".quiz-button").forEach((button) => {
    button.disabled = true;
    button.classList.remove("hoverScale-up");
  });
}

async function reveal(clickedButton, isTimeOut = false) {

  whichButton = clickedButton;
  timeouted

  let urlAnswer = apiUrl + "/api/question/getFromId/" + id
  clockAudio.pause()
  clockAudio.currentTime = 0


   oldText = whichButton.innerText

  printDots(whichButton)
  timeout = setInterval(() => printDots(whichButton), 800) 


  xmlAnswer.open("POST", urlAnswer, true)
  xmlAnswer.setRequestHeader("Authorization", localStorage.getItem("token"))

   
  xmlAnswer.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlAnswer.send(JSON.stringify({
      "difficulty": difficulty,
      "token": localStorage.getItem("token"),
      "answer": whichButton.value
    })
  )

  
  displayNextButton();
}

xmlAnswer.addEventListener("load", () => {
  clearInterval(timeout)
  whichButton.innerText = oldText

 if (xmlAnswer.status != 201) { // On check si on a pas recu d'erreur
   alert(`Error ${xmlAnswer.status}: ${xmlAnswer.statusText}`); 
 } else { 
   let reponse = JSON.parse(xmlAnswer.responseText)
   let a = reponse.correct_answer


   if(timeouted){
     badAudio.play()
   }
 
   const value = whichButton.value;


   if (a === value) {
     goodAudio.play()
     whichButton.style.background = "green";
     displayNextButton();
   } else {
     badAudio.play()
     whichButton.classList.add("apply-shake");
     whichButton.style.background = "red";
     revealGreen(whichButton, a);
   }
 }
})

function revealGreen(whichButton, a){
  if (questionType === "boolean") {
    if (whichButton.value == "True") {
      document.querySelectorAll(".quiz-button")[3].style.background = "green";
    } else {
      document.querySelectorAll(".quiz-button")[2].style.background = "green";
    }
  } else {
    document.querySelectorAll("button").forEach((button) => {
      if (button.value === a) {
        button.style.background = "green";
      }
    });
  }
}

function displayNextButton() {
  disableButtons();

  categorie_label.style.display = "none";
  next_button.style.display = "block";
}


function displayQuestionIndex() {
  setInterval(displayQuestionIndex, 5000);
  let good = false;

  const title = document.getElementById("question-index-label");
  try {
    if (!good) {
      fetch(url)
        .then((reponse) => reponse.json())
        .then((result) => {
          title.innerText =
            '"' + htmlEntities(result.results[0].question) + '"';
        });
    } else {
      good = true;
    }
  } catch (error) {
    console.log(error);
  }
}


function countdown() {
  timeLeft -= 1;

	document.getElementById("seconds").innerHTML = String( timeLeft );

	if (timeLeft > 0) {
		cloackTimeout = setTimeout(countdown, 1000);
	}
  else if(timeLeft == 0){
    b = document.createElement("button")
    reveal(b, true)
    clock.style.border = "2px solid red"
  }
  else if (timeLeft < 0) {
    document.getElementById("seconds").innerHTML = ""
  }

};

function playClockAudio(){
  clockAudio.play()
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

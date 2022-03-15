const apiUrl = "https://sphinx-backend.herokuapp.com"


// Html elements
const categorie_label = document.getElementById("categorie");
const difficulty_tag_label = document.getElementById("difficulty-tag");
const question_label = document.getElementById("question");
const buttons = document.getElementsByClassName("quiz-button");
const ligne2 = document.getElementById("ligne2");
let questionList = [];
const animation = document.getElementById("loading-div");
const main_div = document.getElementById("main-div");
const next_button = document.getElementById("next-question");

const goodAudio = new Audio("./assets/good.wav")
const badAudio = new Audio("./assets/bad.wav")


let questionType;
let difficulty = "";
let id;

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

// Retrieve and display data on the page
async function displayData() {

  
  const url = apiUrl + "/api/question/getOne";

    showAnimation();
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.setRequestHeader("Authorization", sessionStorage.getItem("token"))
    xhr.addEventListener("load", () => {
      if (xhr.status != 200) { // On check si on a pas recu d'erreur
        alert(`Error ${xhr.status}: ${xhr.statusText}`); 
        window.location.replace("../index.php")
      } else { 
        hideAnimation();
        const r = JSON.parse(xhr.responseText)

        id = r.id

        categorie_label.innerText = "Categorie - " + r.category;

        if(r.category == "Entertainment: Video Games" || r.category == "Entertainment: Musicals & Theatres" || r.category == "Entertainment: Music" || r.category == "Entertainment: Television"  || r.category == "Entertainment: Cartoon & Animations"){
          buttonNoTranslate()
        }

        difficulty = r.difficulty
        difficulty_tag_label.innerText = "Difficulty: " + difficulty;

        let questionText = htmlEntities(r.question);
        question_label.innerText = questionText;

        questionList = r.tabSend;
        buttonFill(r.type);

        }
      });
      xhr.send()


}

function buttonNoTranslate(){
  for (let b of buttons) {
    b.classList.add("notranslate")
  }
}

function buttonFill(type) {
  questionType = type;
  if (type === "multiple") {
    let i = 0;
    for (let b of buttons) {
      b.innerText = htmlEntities(questionList[i]);
      b.value = htmlEntities(questionList[i]);
      i++;
    }
  } else {
    ligne2.style.display = "none";
    buttons[0].value = "True";
    buttons[0].innerText = "Vrai";
    buttons[1].value = "False";
    buttons[1].innerText = "Faux";
  }
}

function htmlEntities(str) {
  return String(str)
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
    reveal(button)

    
  });
});

function disableButtons() {
  document.querySelectorAll(".quiz-button").forEach((button) => {
    button.disabled = true;
    button.classList.remove("hoverScale-up");
  });
}

async function reveal(whichButton) {

  let urlAnswer = apiUrl + "/api/question/getFromId/" + id


  let xmlAnswer = new XMLHttpRequest()

  xmlAnswer.open("POST", urlAnswer, false)
  xmlAnswer.setRequestHeader("Authorization", sessionStorage.getItem("token"))

   xmlAnswer.addEventListener("load", () => {
    if (xmlAnswer.status != 201) { // On check si on a pas recu d'erreur
      alert(`Error ${xmlAnswer.status}: ${xmlAnswer.statusText}`); 
    } else { 
      let reponse = JSON.parse(xmlAnswer.responseText)
      let a = reponse.correct_answer

      const value = whichButton.value;


      if (a === value) {
        whichButton.style.background = "green";
        goodAudio.play()
        displayNextButton();
      } else {
        badAudio.play()
        whichButton.classList.add("apply-shake");
        whichButton.style.background = "red";
        revealGreen(whichButton, a);
      }
    }
  })
  xmlAnswer.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlAnswer.send(JSON.stringify({
      "difficulty": difficulty,
      "token": sessionStorage.getItem("token"),
      "answer": whichButton.value
    })
  )

  
  displayNextButton();
}

function revealGreen(whichButton, a){
  if (questionType === "boolean") {
    if (whichButton.value == "True") {
      document.querySelectorAll(".quiz-button")[1].style.background = "green";
    } else {
      document.querySelectorAll(".quiz-button")[0].style.background = "green";
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

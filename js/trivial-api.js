const url = "https://opentdb.com/api.php?amount=1";
const categorie_label = document.getElementById("categorie");
const difficulty_tag_label = document.getElementById("difficulty-tag");
const question_label = document.getElementById("question");
const buttons = document.getElementsByClassName("quiz-button");
const ligne2 = document.getElementById("ligne2");
let questionList = [];
const animation = document.getElementById("loading-div");
const main_div = document.getElementById("main-div");
let a;
let questionType;
let next_button = document.getElementById("next-question");

function showAnimation() {
  main_div.style.display = "none";
  animation.style.display = "block";
}

function hideAnimation() {
  main_div.style.display = "block";
  animation.style.display = "none";
}

async function displayData() {
  try {
    showAnimation();
    fetch(url)
      .then((reponse) => reponse.json())
      .then((result) => {
        categorie_label.innerText = "Categorie: " + result.results[0].category;
        difficulty_tag_label.innerText =
          "Difficulty: " + result.results[0].difficulty;
        let questionText = result.results[0].question;
        questionText = htmlEntities(questionText);
        question_label.innerText = questionText;
        questionList.push(result.results[0].correct_answer);
        questionList = questionList.concat(result.results[0].incorrect_answers);
        buttonFill(result.results[0].type);
        a = result.results[0].correct_answer;
        hideAnimation();
      });
  } catch (error) {
    console.log(error);
  }
}

function buttonFill(type) {
  questionType = type;
  if (type === "multiple") {
    for (let b of buttons) {
      let index = Math.floor(Math.random() * questionList.length);
      b.innerText = htmlEntities(questionList[index]);
      b.value = htmlEntities(questionList[index]);
      questionList.splice(index, 1);
    }
  } else {
    ligne2.style.display = "none";
    buttons[0].value = "True";
    buttons[1].value = "False";
    buttons[0].innerText = "Vrai";
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
    .replace(/&rsquo;/g, "’");
}

document.querySelectorAll(".quiz-button").forEach((button) => {
  button.addEventListener("click", (b) => {
    const value = button.value;
    if (a === value) {
      button.style.background = "green";
      displayNextButton();

      console.log("bonne reponse");
    } else {
      button.classList.add("apply-shake");

      button.style.background = "red";
      reveal(button);
    }
    disableButtons();
  });
});

function disableButtons() {
  document.querySelectorAll(".quiz-button").forEach((button) => {
    button.disabled = true;
    button.classList.remove("hoverScale-up");
  });
}

function reveal(whichButton) {
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
  displayNextButton();
}

function displayNextButton() {
  categorie_label.style.display = "none";
  next_button.style.display = "block";
}

function displayQuestionIndex() {
  const title = document.getElementById("question-index-label");
  try {
    fetch(url)
      .then((reponse) => reponse.json())
      .then((result) => {
        title.innerText = '"' + htmlEntities(result.results[0].question) + '"';
      });
  } catch (error) {
    console.log(error);
  }
}

setInterval(displayQuestionIndex, 5000);

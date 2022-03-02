const url = "https://opentdb.com/api.php?amount=1";
const categorie_label = document.getElementById("categorie");
const difficulty_tag_label = document.getElementById("difficulty-tag");
const question_label = document.getElementById("question");
const buttons = document.getElementsByClassName("quiz-button");

let questionList = [];

async function displayData() {
  try {
    fetch(url)
      .then((reponse) => reponse.json())
      .then((result) => {
        console.log(result);
        categorie_label.innerText = "Categorie: " + result.results[0].category;
        difficulty_tag_label.innerText =
          "Difficulty: " + result.results[0].difficulty;
        let questionText = result.results[0].question;
        questionText = htmlEntities(questionText);
        question_label.innerText = questionText;
        questionList.push(result.results[0].correct_answer);
        questionList = questionList.concat(result.results[0].incorrect_answers);
        buttonFill(result.results[0].type);
      });
  } catch (error) {
    console.log(error);
  }
}

function buttonFill(type) {
  if (type === "multiple") {
    for (let b of buttons) {
      let index = Math.floor(Math.random() * questionList.length);
      console.log(index);
      b.innerText = questionList[index];
      questionList.splice(index, 1);
    }
  }
}

function htmlEntities(str) {
  return String(str)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

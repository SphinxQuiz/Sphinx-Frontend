const url = "https://opentdb.com/api.php?amount=1";
const categorie_label = document.getElementById("categorie");
const difficulty_tag_label = document.getElementById("difficulty-tag");
const question_label = document.getElementById("question");

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
      });
  } catch (error) {
    console.log(error);
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

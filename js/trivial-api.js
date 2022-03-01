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
        question_label.innerText = result.results[0].question;
      });
  } catch (error) {
    console.log(error);
  }
}

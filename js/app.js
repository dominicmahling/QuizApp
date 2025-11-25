const url = "https://opentdb.com/api.php?amount=1" ;// Quiz Api Url

export async function getQuizData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error API is not reachable.");
    /**
     * @typedef {Object} Question
     * @property {string} question
     * @property {string} correct_answer
     * @property {string[]} incorrect_answers
     */

    /**
     * @typedef {Object} ApiResponse
     * @property {Question[]} results
     * @property {number} response_code
     * @property {string} category
     */
    /** @type {ApiResponse} */
    const data = await response.json(); // Transform to js
    if (!isDataValid(data)){
      return getQuizData();
    }
    console.log("Quizdaten:", data);
    return data;
  } catch (error) {
    return getQuizData();
  }
}

function isDataValid(data){
  try {
    data.results[0].question;
    return true;
  }
  catch (error){
    return false;
  }
}

export function decodeHTML(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



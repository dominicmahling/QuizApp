const url = "https://opentdb.com/api.php?amount=1" ;// Quiz Api Url

export async function getQuizData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error API is not reachable.");

    const data = await response.json(); // Transform to js
    if (!isDataValid(data)){
      return getQuizData();
    }
    console.log("Quizdaten:", data);

    // Save as var
    const quizData = data;
    return quizData;
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



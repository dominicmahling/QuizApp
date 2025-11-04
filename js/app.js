const url = "https://opentdb.com/api.php?amount=1" ;// Quiz Api Url

export async function getQuizData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error API is not reachable.");

    const data = await response.json(); // Transform to js
    console.log("Quizdaten:", data);

    // Save as var
    const quizData = data;
    return quizData;
  } catch (error) {
    console.error("Fehler:", error);
  }
}



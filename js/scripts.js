document.getElementById("submit-button").addEventListener("click", function() {
  // Get user's answers to the survey questions
  let question1 = document.getElementById("question1").value;
  let question2 = document.getElementById("question2").value;
  let question3 = document.getElementById("question3").value;
  let question4 = document.getElementById("question4").value;
  let question5 = document.getElementById("question5").value;

  // Initialize a variable to store the suggested language
  let suggestedLanguage;

  // Use branching logic to determine the suggested language based on the user's answers
  if (question1 === "web") {
    suggestedLanguage = "JavaScript";
  } else if (question1 === "mobile") {
    suggestedLanguage = "Swift";
  } else if (question1 === "desktop") {
    suggestedLanguage = "C#";
  } else {
    suggestedLanguage = "Python";
  }

  // Display the suggested language to the user
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Based on your answers, we suggest you learn " + suggestedLanguage + " first.";
});

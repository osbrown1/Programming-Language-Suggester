


  document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get user's answers to the survey questions
    var question1 = document.getElementById("question1").value;
    var question2 = document.getElementById("question2").value;
    var question3 = document.getElementById("question3").value;
    var question4 = document.getElementById("question4").value;
    var question5 = document.getElementById("question5").value;
  
    // Initialize a variable to store the suggested language
    var suggestedLanguage;
  
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
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Based on your answers, we suggest you learn " + suggestedLanguage + " first.";
  });
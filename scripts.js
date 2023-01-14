onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();


  // determine language suggestion
let suggestion = "";
if (question1 === "beginner" && question2 === "web" && question3 === "object-oriented") {
  suggestion = "JavaScript";
} else if (question1 === "intermediate" && question2 === "desktop" && question3 === "functional") {
  suggestion = "Python";
} else if (question1 === "expert" && question2 === "mobile" && question3 === "procedural") {
  suggestion = "C++";
} else {
  suggestion = "Sorry, we could not suggest a language based on your answers.";
}
};


};
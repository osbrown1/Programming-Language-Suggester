// Get references to the form, result div, and form elements
const form = document.getElementById("survey-form");
const result = document.getElementById("result");
const experience = document.getElementById("experience");
const goal = document.getElementById("goal");
const platform = document.getElementById("platform");
const paradigm = document.getElementById("paradigm");
const speed = document.getElementById("speed");

// Add a submit event listener to the form
form.addEventListener("submit", e => {
  e.preventDefault();
  // Clear any previous result
  result.innerHTML = "";

  // Get the user's selections
  const experienceValue = experience.value;
  const goalValue = goal.value;
  const platformValue = platform.value;
  const paradigmValue = paradigm.value;
  const speedValue = speed.value;

  // Use the selections to determine a language suggestion
  let suggestion = "";
  if (experienceValue === "none" && goalValue === "web-development") {
    suggestion = "JavaScript";
  } else if (experienceValue === "some" && goalValue === "data-science") {
    suggestion = "Python";
  } else if (platformValue === "desktop" && paradigmValue === "object-oriented") {
    suggestion = "C#";
  } else if (goalValue === "game-development" && speedValue === "important") {
    suggestion = "C++";
  } else if (experienceValue === "experienced" && paradigmValue === "functional") {
    suggestion = "Scala";
  } else {
    suggestion = "There is no suggestion for you";
  }

  // Display the suggestion
  result.innerHTML = `<p>Based on your selections, we suggest learning <strong>${suggestion}</strong>.</p>`;
});

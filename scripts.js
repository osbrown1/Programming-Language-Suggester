//this function gets the elements on button press 
//and then provides a suggestion
function handleSelect(event) {
  event.preventDefault();
  const form = document.getElementById("survey-form");
  const result = document.getElementById("result");
  const experience = document.getElementById("experience");
  const goal = document.getElementById("goal");
  const platform = document.getElementById("platform");
  const color = document.getElementById("color");
  const speed = document.getElementById("speed");
  
  let suggestion = "";
  if (experience.value === "none" && goal.value === "web-development") {
    suggestion = "JavaScript";
  } else if (goal.value === "data-science" && color.value === "green") {
    suggestion = "Python";
  } else if (platform.value === "desktop" && speed.value === "super important") {
    suggestion = "C++";
  } else if (goal.value === "money" && color.value === "blue") {
    suggestion = "Java";
  } else {
    suggestion = "Hmm try different options";
  }
  document. getElementById("result").innerText = suggestion; 
}
  
addEventListener("load", function() {
  document.getElementById("survey-form").addEventListener("submit", handleSelect);
  });

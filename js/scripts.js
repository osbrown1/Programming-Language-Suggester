const form = document.getElementById("survey-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", e => {
  e.preventDefault();

  const question1 = form.question1.value;
  const question2 = form.question2.value;
  const question3 = form.question3.value;
  const question4 = form.question4.value;
  const question5 = form.question5.value;

  let result;

  if (question1 === "web") {
    if (question2 === "beginner") {
      result = "JavaScript";
    } else if (question4 === "dynamically") {
      result = "Python";
    } else {
      result = "C#";
    }
  } else if (question1 === "mobile") {
    if (question3 === "windows") {
      result = "C#";
    } else if (question5 === "mobile") {
      result = "Swift";
    } else {
      result = "Java";
    }
  } else if (question1 === "desktop") {
    if (question3 === "mac") {
      result = "Swift";
    } else {
      result = "C++";
    }
  } else {
    if (question4 === "dynamically") {
      result = "Python";
    } else {
      result = "C++";
    }
  }

  resultDiv.innerHTML = `<h2>Based on your answers, we suggest you learn <strong>${result}</strong> first.</h2>`;
  resultDiv.style.display = "block";
});

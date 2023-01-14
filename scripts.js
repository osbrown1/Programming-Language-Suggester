const form = document.getElementById("survey-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", e => {
  e.preventDefault();
  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;
  const question4 = document.getElementById("question4").value;
  const question5 = document.getElementById("question5").value;

  let result = "Based on your answers, we recommend: ";

  if (question1 === "web") {
    if (question2 === "none") {
      result += "JavaScript (with a framework such as React or Angular)";
    } else if (question2 === "some") {
      result += "Python (with a framework such as Django or Flask)";
    } else if (question2 === "experienced") {
      result += "TypeScript (with a framework such as React or Angular)";
    }
  } else if (question1 === "mobile") {
    if (question2 === "none") {
      result += "Swift (for iOS) or Kotlin (for Android)";
    } else if (question2 === "some") {
      result += "React Native";
    } else if (question2 === "experienced") {
      result += "Flutter";
    }
  } else if (question1 === "desktop") {
    if (question2 === "none") {
      result += "C# (with a framework such as WPF or Windows Forms)";
    } else if (question2 === "some") {
      result += "C++ (with a framework such as Qt or wxWidgets)";
    } else if (question2 === "experienced") {
      result += "Rust (with a framework such as GTK or QT)";
    }
  } else if (question1 === "other") {
    result += "It depends on the specific requirements of your application.";
  }
  resultDiv.innerHTML = result;
});

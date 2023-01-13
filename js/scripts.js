form.addEventListener("submit", function(event) {
  event.preventDefault();
  // gather form data
  const experienceLevel = document.getElementById("experience-level").value;
  const projectType = document.getElementById("project-type").value;
  const environment = document.getElementById("environment").value;
  const music = document.getElementById("music").value;
  const animal = document.getElementById("animal").value;

  // determine suggested language
  let language = "";
  if (experienceLevel === "beginner") {
    language = "Python";
  } else if (experienceLevel === "intermediate") {
    if (projectType === "web") {
      language = "JavaScript";
    } else if (projectType === "mobile") {
      language = "Swift";
    } 
  } else if (experienceLevel === "expert") {
    if (projectType === "web") {
      if(environment === "linux"){
        language = "Go";
      }else{
        language = "Rust"
      }
    } else if (projectType === "mobile") {
      if(animal === "dog"){
        language = "C#";
      }else{
        language = "Java"
      }
    }
  }

  // show suggested language
  resultDiv.innerHTML = `<h2>Based on your responses, we suggest learning <span class="language">${language}</span></h2>`;
  resultDiv.style.display = "block";
});
function change(str) {
  document.getElementById("aboutme").style.opacity = "0";
  document.getElementById("cvitae").style.opacity = "0";
  document.getElementById("projects").style.opacity = "0";
  document.getElementById("contact").style.opacity = "0";
  document.getElementById("aboutmelink").className = "";
  document.getElementById("cvitaelink").className = "";
  document.getElementById("projectslink").className = "";
  document.getElementById("contactlink").className = "";
  switch (str) {
    case "aboutme":
      document.getElementById("aboutme").style.opacity = "1";
      document.getElementById("aboutmelink").className = "activelink";
      break;
    case "cvitae":
      document.getElementById("cvitae").style.opacity = "1";
      document.getElementById("cvitaelink").className = "activelink";
      break;
    case "projects":
      document.getElementById("projects").style.opacity = "1";
      document.getElementById("projectslink").className = "activelink";
      break;
    case "contact":
      document.getElementById("contact").style.opacity = "1";
      document.getElementById("contactlink").className = "activelink";
      break;
  }
}

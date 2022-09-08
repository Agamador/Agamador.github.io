function change(str) {
  document.getElementById("aboutme").style.opacity = "0";
  document.getElementById("cvitae").style.opacity = "0";
  document.getElementById("projects").style.opacity = "0";
  document.getElementById("contact").style.opacity = "0";
  document.getElementById("aboutmelink").style.color = "#6246ea";
  document.getElementById("cvitaelink").style.color = "#6246ea";
  document.getElementById("projectslink").style.color = "#6246ea";
  document.getElementById("contactlink").style.color = "#6246ea";
  console.log(str);
  switch (str) {
    case "aboutme":
      document.getElementById("aboutme").style.opacity = "1";
      document.getElementById("aboutmelink").style.color = "#e45858";
      break;
    case "cvitae":
      document.getElementById("cvitae").style.opacity = "1";
      document.getElementById("cvitaelink").style.color = "#e45858";
      break;
    case "projects":
      document.getElementById("projects").style.opacity = "1";
      document.getElementById("projectslink").style.color = "#e45858";
      break;
    case "contact":
      document.getElementById("contact").style.opacity = "1";
      document.getElementById("contactlink").style.color = "#e45858";
      break;
  }
}

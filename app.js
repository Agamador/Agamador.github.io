function change(str) {
  document.getElementById("aboutme").style.opacity = "0";
  document.getElementById("cvitae").style.opacity = "0";
  document.getElementById("projects").style.opacity = "0";
  document.getElementById("contact").style.opacity = "0";
  document.getElementById("aboutmelink").style.color = "#001e1d";
  document.getElementById("cvitaelink").style.color = "#001e1d";
  document.getElementById("projectslink").style.color = "#001e1d";
  document.getElementById("contactlink").style.color = "#001e1d";
  console.log(str);
  switch (str) {
    case "aboutme":
      document.getElementById("aboutme").style.opacity = "1";
      document.getElementById("aboutmelink").style.color = "#fba72a";
      break;
    case "cvitae":
      document.getElementById("cvitae").style.opacity = "1";
      document.getElementById("cvitaelink").style.color = "#fba72a";
      break;
    case "projects":
      document.getElementById("projects").style.opacity = "1";
      document.getElementById("projectslink").style.color = "#fba72a";
      break;
    case "contact":
      document.getElementById("contact").style.opacity = "1";
      document.getElementById("contactlink").style.color = "#fba72a";
      break;
  }
}

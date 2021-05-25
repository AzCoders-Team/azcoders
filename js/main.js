window.addEventListener("scroll",function(){
  var navigation = document.querySelector("nav");
  var titles = document.getElementById("active");
  var menu = document.getElementById("menu");
  var project = document.getElementById("projects");
  var logo = document.getElementById("logo");
  var pos = 210;
  navigation.classList.toggle("new-design",window.scrollY > pos);
  titles.classList.toggle("active",window.scrollY > pos);
  menu.classList.toggle("menu",window.scrollY > pos);
  project.classList.toggle("projects",window.scrollY > pos);
  logo.classList.toggle("logo1",window.scrollY > pos);
})

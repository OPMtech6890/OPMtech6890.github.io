//Only js functionality is to reset the css animations. Thanks for visiting!
function reset_animation() {
  var elements = [document.getElementById('leftcolor'), document.getElementById('rightcolor'), document.getElementById('gulf'), document.getElementById('car'), document.getElementById('browser')];
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animation = "none";
    elements[i].offsetHeight;
    elements[i].style.animation = null;
  }
}

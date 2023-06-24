var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("transparentFooter").classList.add("visible");
  } else {
    document.getElementById("transparentFooter").classList.remove("visible");
  }
  
  prevScrollpos = currentScrollPos;
}

document.getElementById("link1").addEventListener("click", function() {
  window.location.href = "https://github.com/QuarkDevelop";
});

document.getElementById("link2").addEventListener("click", function() {
  window.location.href = "https://github.com/Stormysx/xox";
});
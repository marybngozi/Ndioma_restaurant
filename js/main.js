window.onscroll = function(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").style.backgroundColor = "#ca7709";
    document.querySelectorAll(".nav-link").forEach(nav => {
      nav.style.color = "#fff";
    });
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
    document.querySelectorAll(".nav-link").forEach(nav => {
      nav.style.color = "#555";
    });
  }
}

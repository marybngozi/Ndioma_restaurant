window.onscroll = function(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").style.backgroundColor = "#ca7709";
    document.querySelector("#navbar_btn").style.backgroundColor = "#fff";
    document.querySelector("#navbar_btn").style.color = "#ca7709";
    document.querySelector("#navbarToggler1").style.backgroundColor = "transparent";
    document.querySelectorAll(".nav-link").forEach(nav => {
      nav.style.color = "#fff";
    });
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
    document.querySelector("#navbar_btn").style.backgroundColor = "#ca7709";
    document.querySelector("#navbar_btn").style.color = "#fff";
    document.querySelector("#navbarToggler1").style.backgroundColor = "#fff";
    document.querySelectorAll(".nav-link").forEach(nav => {
      nav.style.color = "#555";
    });
  }
}

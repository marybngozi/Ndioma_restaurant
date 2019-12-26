window.onscroll = function(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.remove("nav_bar-still");
    document.querySelector("nav").classList.add("nav_bar-scroll");
    document.querySelector("nav").style.paddingTop = "25px";

    document.querySelector("#navbar_btn").style.backgroundColor = "#fff";
    document.querySelector("#navbar_btn").style.color = "#ca7709";
    document.querySelector("#navbarToggler1").style.backgroundColor = "transparent";
    document.querySelectorAll(".nav-link").forEach(nav => {
      nav.style.color = "#fff";
    });
  } else {
    if(document.querySelector("nav").classList.contains("nav_bar-scroll")){
      document.querySelector("nav").classList.remove("nav_bar-scroll");
      document.querySelector("nav").classList.add("nav_bar-still")
    }
    // if(document.querySelector("#navbar_btn").classList.contains("navbar_btn-scroll")){
    //   document.querySelector("#navbar_btn").classList.remove("navbar_btn-scroll");
    //   document.querySelector("#navbar_btn").classList.add("navbar_btn-still")
    // }

    document.querySelector("#navbar_btn").style.backgroundColor = "#ca7709";
    document.querySelector("#navbar_btn").style.color = "#fff";
    document.querySelector("#navbarToggler1").classList.add("navbarToggler");
    document.querySelectorAll(".nav-link").forEach(nav => {
      nav.style.color = "#555";
    });
  }
}

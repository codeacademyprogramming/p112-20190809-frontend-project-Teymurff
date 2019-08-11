$(document).ready(function () {
    $("#hamburgermenu").click(function () {
        $("#sidenavigation").width("350px");
    });

    $(".closesidenav").click(function () {
        $("#sidenavigation").width("0");
    });
});

let acc = document.getElementsByClassName("accordion-edulearn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



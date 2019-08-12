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

let accabout = document.getElementsByClassName("accordion-aboutus");
let j;

for (j = 0; j < accabout.length; j++) {
  accabout[j].addEventListener("click", function() {
    this.classList.toggle("activeab");
    let panelabout = this.nextElementSibling;
    if (panelabout.style.maxHeight){
      panelabout.style.maxHeight = null;
    } else {
      panelabout.style.maxHeight = panelabout.scrollHeight + "px";
    } 
  });

  
}



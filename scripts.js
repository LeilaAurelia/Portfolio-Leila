window.addEventListener("resize", fecharmodal);
window.addEventListener("DOMContentLoaded", fecharmodal);

function openModal(modalId) {
  if (window.innerWidth < 1200) {
    // Lógica para abrir o modal
    document.getElementById(modalId).style.display = "none";
  } else {
    document.getElementById(modalId).style.display = "flex";
  }
}
function fecharmodal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal1");
  var modals = document.getElementsByClassName("modal2");
  var modals = document.getElementsByClassName("modal3");
  var modals = document.getElementsByClassName("modal4");
  var modals = document.getElementsByClassName("modal5");
  var modals = document.getElementsByClassName("modal6");
  var modals = document.getElementsByClassName("modal7");
  var modals = document.getElementsByClassName("modal8");
  var modals = document.getElementsByClassName("modal9");
  var modals = document.getElementsByClassName("modal10");
  var modals = document.getElementsByClassName("modal11");
  var modals = document.getElementsByClassName("modal12");
  var modals = document.getElementsByClassName("modal13");
  var modals = document.getElementsByClassName("modal14");
  var modals = document.getElementsByClassName("modal15");
  var modals = document.getElementsByClassName("modal16");
  var modals = document.getElementsByClassName("modal17");
  var modals = document.getElementsByClassName("modal18");
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

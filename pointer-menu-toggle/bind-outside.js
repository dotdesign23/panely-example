const activePath = "/chart/apex-chart";

document.querySelectorAll('.menu-item-link.active:not(.menu-item-toggle)').forEach( element => {
  element.classList.remove("active");
});

document.querySelector(`.menu-item-link[href="${activePath}"]`).classList.add("active");

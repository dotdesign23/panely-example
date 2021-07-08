document.querySelectorAll('.menu-item-link.active:not(.menu-item-toggle)').forEach( element => {
  element.classList.remove("active");
});

document.querySelector('.menu-item-link[href="/chart/apex-chart"]').classList.add("active");

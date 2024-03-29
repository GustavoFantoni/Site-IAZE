let menu = document.querySelector('ul.menu-content');
let btn = document.querySelector('button.btn-act');
let overlay = document.getElementById('overlay'); 
btn.addEventListener('click', active);

function active() {
    menu.classList.toggle('area-menu-actived');
    btn.classList.toggle('btn-act-active');

    overlay.classList.toggle('overlay-active');

   
    document.body.classList.toggle('no-scroll');
}


document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    const close = document.getElementById("closePopupBtn");
    close.addEventListener("click", function () {
        popup.style.display = "none";
    })
})
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });


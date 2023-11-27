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



let menu = document.querySelector('ul.menu-content');
let btn = document.querySelector('button.btn-act');
let overlay = document.getElementById('overlay'); // Adicionado para referenciar o overlay

btn.addEventListener('click', active);

function active() {
    menu.classList.toggle('area-menu-actived');
    btn.classList.toggle('btn-act-active');

    overlay.classList.toggle('overlay-active');

   
    document.body.classList.toggle('no-scroll');
}





let atvButton = document.querySelector("button.ativa-contatos");
atvButton.addEventListener("click", mostrarRedes);

let btnW = document.querySelector(".btnW");
let btnF = document.querySelector(".btnF");
let btnI = document.querySelector(".btnI");

function mostrarRedes() {
    btnW.classList.toggle('btnW-Actived');
    btnF.classList.toggle('btnF-Actived');
    btnI.classList.toggle('btnI-Actived');
}

































let btnR = document.querySelector('button.btnR');
let btnL = document.querySelector('button.btnL');
btnR.addEventListener('click', right);
btnL.addEventListener('click', left);
let areaImagens = document.querySelector('div.carrossel');
let imagens = ['Images/30134.webp',  'Images/30026.webp', 'Images/30111.webp', "Images/30015.webp"];
let itensArray = 0;

// Pré-carrega as imagens
let imagensCarregadas = [];
for (let i = 0; i < imagens.length; i++) {
    let img = new Image();
    img.src = imagens[i];
    imagensCarregadas.push(img);
}

let img = document.createElement('img');
img.setAttribute('src', imagens[itensArray]);
areaImagens.appendChild(img);

function right() {
    img.style.opacity = 0;
    setTimeout(() => {
        itensArray = (itensArray + 1) % imagens.length;
        img.setAttribute('src', imagens[itensArray]);
        img.style.opacity = 1; 
    }, 500); 
}

function left() {
    img.style.opacity = 0; 
    setTimeout(() => {
        itensArray = (itensArray - 1 + imagens.length) % imagens.length;
        img.setAttribute('src', imagens[itensArray]);
        img.style.opacity = 1; 
    }, 500); 
}






let im1 = document.querySelector("img.img-5-1");
let im2 = document.querySelector("img.img-5-2");
let im3 = document.querySelector("img.img-5-3");
im1.addEventListener("click", up1);
im2.addEventListener("click", up2);
im3.addEventListener("click", up3);

function up1() {
    im1.style.width = "45%";
    im1.style.filter = 'brightness(100%)';
    im2.style.width = "27.5%";
    im2.style.filter = 'brightness(50%)';
    im3.style.width = "27.5%";
    im3.style.filter = 'brightness(50%)';
}
function up2() {
    im1.style.width = "27.5%";
    im1.style.filter = 'brightness(50%)';
    im2.style.width = "45%";
    im2.style.filter = 'brightness(100%)';
    im3.style.width = "27.5%";
    im3.style.filter = 'brightness(50%)';
}
function up3() {
    im1.style.width = "27.5%";
    im1.style.filter = 'brightness(50%)';
    im2.style.width = "27.5%";
    im2.style.filter = 'brightness(50%)';
    im3.style.width = "45%";
    im3.style.filter = 'brightness(100%)';
}












document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const topoButton = document.querySelector('.topo');

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('scroll', handleScroll);

    // Adiciona chamada para handleScroll ao carregar a página
    handleScroll();

    function handleWheel(event) {
        const screenSize = window.innerWidth;
        const deltaY = event.deltaY;

        if (screenSize <= 600) {
            if (deltaY > 0) {
                scrollToSection('next');
            } else {
                scrollToSection('prev');
            }
        } else {
            if (deltaY > 0) {
                scrollToSection('next');
            } else {
                scrollToSection('prev');
            }
        }
    }

    let touchStartY;

    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        event.preventDefault();
    }

    function handleTouchEnd(event) {
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        const screenSize = window.innerWidth;

        if (screenSize <= 600) {
            if (deltaY > 50) {
                scrollToSection('prev');
            } else if (deltaY < -50) {
                scrollToSection('next');
            }
        } else {
            if (deltaY > 50) {
                scrollToSection('next');
            } else if (deltaY < -50) {
                scrollToSection('prev');
            }
        }
    }

    function handleScroll() {
        const currentSection = getCurrentSection();

        if (currentSection !== 0) {
            topoButton.style.display = 'block';
        } else {
            topoButton.style.display = 'none';
        }
    }

    topoButton.addEventListener('click', function () {
        sections[0].scrollIntoView({ behavior: 'smooth' });
    });

    function scrollToSection(direction) {
        let currentSection = getCurrentSection();

        if (direction === 'next' && currentSection < sections.length - 1) {
            currentSection++;
        } else if (direction === 'prev' && currentSection > 0) {
            currentSection--;
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }

    function getCurrentSection() {
        let currentSection = 0;
        const scrollPosition = window.scrollY || window.pageYOffset;

        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].offsetTop - (sections[i].offsetHeight / 2);
            if (scrollPosition >= sectionTop) {
                currentSection = i;
            }
        }

        return currentSection;
    }
});

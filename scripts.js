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






























let btnText1 = document.querySelector("button.text-1");
let btnText2 = document.querySelector("button.text-2");
let btnText3 = document.querySelector("button.text-3");
let textQS = document.querySelector("p.text-here");

text1 = "A Iaze Bebê, ponto de referência em todo o país, é uma marca renomada especializada em oferecer excepcionais conjuntos para bebês. Desde o início, nossa dedicação à qualidade e conforto se destacou, tornando-nos líderes no mercado. Operando uma loja online desde 2019, buscamos preencher uma lacuna para aqueles que desejam adquirir nossos renomados conjuntos. Nosso compromisso é criar peças únicas, fruto de um processo de produção complexo e rigoroso, refletindo beleza e bem-estar. A Iaze Bebê foi fundada com a missão de oferecer produtos de alta qualidade e segurança, focando no desenvolvimento e bem-estar dos pequenos. Estamos comprometidos em atender às necessidades de nosso público, oferecendo diversas opções de pagamento, métodos de entrega e canais de atendimento para esclarecer dúvidas, sugestões ou reclamações. Seja parte da nossa história, onde a excelência em produtos para bebês encontra-se com o compromisso inabalável com nossos clientes.";
text2 = "Missão: A missão da Iaze Bebê é proporcionar produtos de alta qualidade e segurança para bebês, investindo em pesquisa de tendências globais e utilizando os melhores materiais. Buscamos constantemente inovação para garantir o bem-estar dos pequenos, priorizando a satisfação de nossos clientes. <br> Visão: Nossa visão é ser reconhecida como a marca referência em produtos para bebês, destacando-nos pela excelência em qualidade, confiabilidade e beleza. Almejamos fortalecer nossa presença global, construindo relacionamentos sólidos pautados no respeito, carinho e confiança com nossos clientes.";
text3 = "A Iaze Bebê tem a honra de ser amplamente reconhecida como ponto de referência nacional em produtos para bebês. Nossa excepcional linha de conjuntos para bebês conquistou destaque pela qualidade e conforto proporcionados. Desde o início de nossas operações online, recebemos reconhecimento por preencher uma lacuna muitas vezes não suprida por outras lojas. Nossa dedicação ao desenvolvimento, pesquisa de tendências globais e atendimento excepcional resultou em prêmios e elogios da comunidade de pais e cuidadores. Estamos gratos pela confiança de nossos valiosos clientes, e continuamos comprometidos em oferecer produtos que atendam às expectativas mais elevadas.";




btnText1.addEventListener("click", btn1);
btnText2.addEventListener("click", btn2);
btnText3.addEventListener("click", btn3);

function btn1() {
    btnText1.style.backgroundColor = "#ffffff";
    btnText2.style.backgroundColor = "#82c0df";
    btnText3.style.backgroundColor = "#82c0df";
    btnText1.style.transition = "500ms";
    textQS.innerHTML = text1;
}
function btn2() {
    btnText1.style.backgroundColor = "#82c0df";
    btnText2.style.backgroundColor = "#ffffff";
    btnText3.style.backgroundColor = "#82c0df";
    btnText2.style.transition = "500ms";
    textQS.innerHTML = text2;
}
function btn3() {
    btnText1.style.backgroundColor = "#82c0df";
    btnText2.style.backgroundColor = "#82c0df";
    btnText3.style.backgroundColor = "#ffffff";
    btnText3.style.transition = "500ms";
    textQS.innerHTML = text3;
}


















let btnR = document.querySelector('button.btnR');
let btnL = document.querySelector('button.btnL');
btnR.addEventListener('click', right);
btnL.addEventListener('click', left);
let areaImagens = document.querySelector('div.carrossel');
let imagens = ['Images/30134.png', 'Images/28.png',  'Images/30136.png', 'Images/29017.png'];
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

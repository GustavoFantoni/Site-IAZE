let menu = document.querySelector('ul.menu-content');
let btn  = document.querySelector('button.btn-act');
btn.addEventListener('click', active);

function active() {
    menu.classList.toggle('area-menu-actived');
    btn.classList.toggle('btn-act-active')
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
    btnText2.style.backgroundColor = "#f3d7da";
    btnText3.style.backgroundColor = "#f3d7da";
    btnText1.style.transition = "500ms";
    textQS.innerHTML = text1;
}
function btn2() {
    btnText1.style.backgroundColor = "#f3d7da";
    btnText2.style.backgroundColor = "#ffffff";
    btnText3.style.backgroundColor = "#f3d7da";
    btnText2.style.transition = "500ms";
    textQS.innerHTML = text2;
}
function btn3() {
    btnText1.style.backgroundColor = "#f3d7da";
    btnText2.style.backgroundColor = "#f3d7da";
    btnText3.style.backgroundColor = "#ffffff";
    btnText3.style.transition = "500ms";
    textQS.innerHTML = text3;
}






document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    let touchStartY;

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    function handleWheel(event) {
        const screenSize = window.innerWidth;

        if (screenSize <= 600) {
            // Em telas pequenas, inverte o comportamento
            if (event.deltaY > 0) {
                // Scroll para baixo
                scrollToSection('prev');
            } else {
                // Scroll para cima
                scrollToSection('next');
            }
        } else {
            // Em telas maiores, mantém o comportamento padrão
            if (event.deltaY > 0) {
                // Scroll para baixo
                scrollToSection('next');
            } else {
                // Scroll para cima
                scrollToSection('prev');
            }
        }
    }

    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        event.preventDefault(); // Evita o comportamento padrão de rolagem em dispositivos móveis
    }

    function handleTouchEnd(event) {
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        const screenSize = window.innerWidth;

        if (screenSize <= 600) {
            // Em telas pequenas, inverte o comportamento
            if (deltaY > 50) {
                // Scroll para cima
                scrollToSection('prev');
            } else if (deltaY < -50) {
                // Scroll para baixo
                scrollToSection('next');
            }
        } else {
            // Em telas maiores, mantém o comportamento padrão
            if (deltaY > 50) {
                // Scroll para baixo
                scrollToSection('next');
            } else if (deltaY < -50) {
                // Scroll para cima
                scrollToSection('prev');
            }
        }
    }

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
            const sectionTop = sections[i].offsetTop;
            if (scrollPosition >= sectionTop) {
                currentSection = i;
            }
        }

        return currentSection;
    }
});

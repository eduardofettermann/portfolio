const contadorHtml = document.getElementById("contador-de-dias");



const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;

function contarDiasDesdeInicioEstudos() {
    let inicioDosEstudos = new Date('2023-03-13T14:00:00.000Z');
    let dataDeHoje = new Date();

    let diferencaDeDias = dataDeHoje.getTime() - inicioDosEstudos.getTime();

    const resultado = Math.floor(diferencaDeDias / dia);

    contadorHtml.innerHTML = resultado;
    contadorHtml.innerHTML += " dias";

    document.addEventListener("DOMContentLoaded", function () {
        function updateCounter() {
            let count = 0;

            function incrementCount() {
                count++;
                contadorHtml.textContent = count;
                if (count >= resultado) {
                    //limite do counter
                    clearInterval(counterInterval);
                }
            }

            const counterInterval = setInterval(incrementCount, 30); //velocidade do counter
        }

        updateCounter();
    });



}

contarDiasDesdeInicioEstudos()


// Menu hamburguer

const hamburguer = document.querySelector(".navbar__hamburguer");
const navMenu = document.querySelector(".navbar__list");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log("funcionou");

})


// Transição e scroll
const menuLinks = document.querySelectorAll('.navbar__list a');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;

}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
        link.addEventListener("click", (scrollToSection) => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
        console.log(link);
    })
})

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}

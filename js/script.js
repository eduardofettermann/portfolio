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

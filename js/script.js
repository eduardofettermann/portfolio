const contadorHtml = document.getElementById("contador-de-dias");
const minhaIdadeHtml = document.getElementById("minha-idade");

const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;
const anoEmMilisegundos = (dia * 365) + (6 * hora);

function contarDiasDesdeInicioEstudos() {
    let inicioDosEstudos = new Date('2023-03-13T14:00:00.000Z');
    let dataDeHoje = new Date();

    let diferencaDeDias = dataDeHoje.getTime() - inicioDosEstudos.getTime();

    const resultado = Math.floor(diferencaDeDias / dia);

    contadorHtml.innerHTML = resultado;
    contadorHtml.innerHTML += " dias";
}

function atualizarMinhaIdade() {
    let dataDoMeuNascimento = new Date('2005-12-02T08:00:00.000Z');
    let dataDeHoje = new Date();

    let diferencaDeMilisegundos = dataDeHoje.getTime() - dataDoMeuNascimento.getTime();

    const resultado = Math.floor(diferencaDeMilisegundos / anoEmMilisegundos);

    minhaIdadeHtml.innerHTML = resultado;
}
atualizarMinhaIdade();
contarDiasDesdeInicioEstudos();


const $ = document.getElementById.bind(document);

function botao(num) {
    let salvo = $('res').value;
    $('res').value = salvo + num;
}

function calcule() {
    let resultado = $('res').value;
    $('res').value = '';
    let resultadoVisor = eval(resultado);

    if (resultadoVisor === undefined || resultadoVisor === Infinity || Number.isNaN(resultadoVisor) || resultadoVisor === -Infinity) {
        $('res').value = 'ERRO!';
    } else {
        $('res').value = resultadoVisor;
    }
}

function reset() {
    let limpar = $.value;
    $('res').value = '';
}
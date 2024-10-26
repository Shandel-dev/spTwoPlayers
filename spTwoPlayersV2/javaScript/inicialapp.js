let contador = 1;
let intervaloPadrao = 7000;
let intervaloEstendido = 12000;

document.getElementById('radio1').checked = true;

let intervaloSlide = setInterval(proxSlide, intervaloPadrao);

function proxSlide() {
    contador ++;
    if(contador > 4){
        contador = 1;
    }
    document.getElementById("radio"+contador).checked = true;
}

let intervaloAjustado = false;

function ajustarIntervalo(tempo) {//caso a div seja clicada
    if(!intervaloAjustado){
        clearInterval(intervaloSlide);
        intervaloSlide = setInterval(proxSlide,tempo);
        intervaloAjustado = true;
    }

}


document.getElementById('manual1').addEventListener('click', () => ajustarIntervalo(intervaloEstendido));
document.getElementById('manual2').addEventListener('click', () => ajustarIntervalo(intervaloEstendido));
document.getElementById('manual3').addEventListener('click', () => ajustarIntervalo(intervaloEstendido));
document.getElementById('manual4').addEventListener('click', () => ajustarIntervalo(intervaloEstendido));


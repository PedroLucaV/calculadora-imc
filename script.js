let document; let location; let window;
const alt = document.getElementById('altura');
const pes = document.getElementById('peso');
const res = document.getElementById('res');
const calc = document.getElementById('calc');
const limp = document.getElementById('limp');
const classi = document.getElementById('class');

calc.addEventListener('click', () => {
  const altura = alt.value;
  const peso = pes.value;
  let calculo = 0;

  calculo = peso / (altura * altura);

  res.innerHTML = `${calculo.toFixed(1)} de IMC`;

  if (altura === '' || Number.isNaN(altura) || altura <= 0) {
    window.confirm('INFORME UM VALOR VALIDO PARA ALTURA');
    location.reload();
  } else if (peso === '' || Number.isNaN(peso) || peso <= 0) {
    window.confirm('INFORME UM VALOR VALIDO PARA PESO');
    location.reload();
  } else if (calculo < 16.9) {
    classi.innerHTML = 'Muito Abaixo';
  } else if (calculo > 16.9 && calculo <= 18.4) {
    classi.innerHTML = 'Abaixo';
  } else if (calculo >= 18.5 && calculo <= 24.9) {
    classi.innerHTML = 'Normal';
  } else if (calculo >= 25 && calculo <= 29.9) {
    classi.innerHTML = 'Acima';
  } else if (calculo >= 30 && calculo <= 34.9) {
    classi.innerHTML = 'OB 1';
  } else if (calculo >= 35 && calculo <= 40) {
    classi.innerHTML = 'OB 2';
  } else if (calculo > 40) {
    classi.innerHTML = 'OB 3';
  }
});

limp.addEventListener('click', () => {
  const resul = res;
  const classif = classi;
  resul.innerHTML = 'Aguardando valores...';
  classif.innerHTML = ' ';
});

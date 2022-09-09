setInterval(function() {
  let novaHora = new Date();
  let dia = novaHora.getDay();
  let hora = novaHora.getHours();
  let minuto = novaHora.getMinutes();
  let segundos = novaHora.getSeconds();

  dia = zero(dia);
  minuto = zero(minuto);
  segundos = zero(segundos);

  document.getElementById('count').textContent = dia + ' : ' + hora + ' : ' + minuto + ' : ' + segundos;
}, 1000)

function zero(x) {
  if (x < 10) {
    x = '0' + x;
  } return x;
}
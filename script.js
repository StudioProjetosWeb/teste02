document.addEventListener('DOMContentLoaded', function () {
  const contadorElement = document.getElementById('contador');
  const botaoAcessar = document.getElementById('botaoAcessar');
  const dataFim = new Date(Date.UTC(2023, 12 -1, 8, 0, 1, 0)).getTime();

  function updateCounter() {
    const currentTime = new Date().getTime();
    const distancia = dataFim - currentTime;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contadorElement.innerHTML = (dias < 10 ? '0' : '') + dias + ":" +
                                 (horas < 10 ? '0' : '') + horas + ":" +
                                 (minutos < 10 ? '0' : '') + minutos + ":" +
                                 (segundos < 10 ? '0' : '') + segundos;

    if (distancia < 0) {
      clearInterval(intervalo);
      contadorElement.style.display = "none";
      botaoAcessar.style.display = "block";
    }
  }

  let intervalo = setInterval(updateCounter, 1000);
  updateCounter();

  botaoAcessar.addEventListener('click', function() {
    window.location.href = 'https://suaoutraurl.com'; // Substitua pela URL desejada
  });
});

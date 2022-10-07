const d = document;

export function countdown(id, limitDate, msg) {
  const $countdown = d.querySelector(id);
  const countdownDate = new Date(limitDate).getTime();
  let limitTime, days, hours, min, sec;

  let countTempo = setInterval(() => {
    let now = new Date().getTime();

    limitTime = countdownDate - now;
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24));

    hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);

    min = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);

    sec = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} Días ${hours} Horas ${min} Minutos ${sec} Segundos</h3>`;
    if (limitTime < 0) {
      clearInterval(countTempo);
      $countdown.innerHTML = `<h3>${msg}</h3>`;
    }
  }, 1000);
}

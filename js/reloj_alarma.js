const d = document;
export function digitalClock(clock, btn1, btn2) {
  let interval;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn1)) {
      e.target.disabled = true;

      let time = new Date().toLocaleTimeString();
      d.querySelector(clock).innerHTML = `<h3>${time}</h3>`;

      interval = setInterval(() => {
        time = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${time}</h3>`;
      }, 1000);
    }

    if (e.target.matches(btn2)) {
      clearInterval(interval);
      d.querySelector(btn1).disabled = false;
      d.querySelector(clock).innerHTML = null;
    }
  });
}

export function alarm(sound, btn3, btn4) {
  let timeout;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn3)) {
      e.target.disabled = true;
      timeout = setTimeout(() => {
        sound.play();
      }, 2000);
    }

    if (e.target.matches(btn4)) {
      clearTimeout(timeout);
      sound.pause();
      sound.currentTime = 0;
      d.querySelector(btn3).disabled = false;
    }
  });
}

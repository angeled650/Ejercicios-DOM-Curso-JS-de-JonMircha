const d = document;
let x = 0,
  y = 0;

export function keyboardminigame(e, ball, area) {
  const $ball = d.querySelector(ball),
    $area = d.querySelector(area),
    limitsBall = $ball.getBoundingClientRect(),
    limitsArea = $area.getBoundingClientRect();

  switch (e.keyCode) {
    //Izquierda
    case 37:
      if (limitsBall.left > limitsArea.left) {
        e.preventDefault();
        x--;
      }
      break;
    //Arriba
    case 38:
      if (limitsBall.top > limitsArea.top) {
        e.preventDefault();
        y--;
      }
      break;
    //Derecha
    case 39:
      if (limitsBall.right < limitsArea.right) {
        e.preventDefault();
        x++;
      }
      break;
    // Abajo
    case 40:
      if (limitsBall.bottom < limitsArea.bottom) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function keyboardshortcuts(e) {
  if (e.ctrlKey && e.keyCode == 65) {
    e.preventDefault();
    alert("Esto es una alerta");
  }
  if (e.ctrlKey && e.keyCode == 80) {
    e.preventDefault();
    prompt("Esto es un aviso", "Así es");
  }
  if (e.ctrlKey && e.keyCode == 67) {
    e.preventDefault();
    confirm("¿Esto es una confirmación?");
  }
}

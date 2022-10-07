const d = document;

export default function sorteo(btn, participantes) {
  const $participantes = d.querySelectorAll(participantes);
  let numParticipantes = $participantes.length;

  function ganadorSorteo() {
    let random = Math.floor(Math.random() * numParticipantes),
      resultado = $participantes[random];
    return resultado;
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let ganador = ganadorSorteo();
      alert(`Ganador: ${ganador.textContent}`);
    }
  });
}

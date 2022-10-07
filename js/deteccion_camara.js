const d = document,
  n = navigator,
  w = window;

export default function deteccionCamara(id) {
  const $video = d.getElementById(id);
  let especif = { audio: false, video: { facingMode: "user" } };

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia(especif)
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        );
        console.log(`¡Sucedió el siguiente error!: ${err}`);
      });
  }
}

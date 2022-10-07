const d = document;

export default function responsiveTester(url, width, height, closeWindow) {
  let direccionURL = d.getElementById(url),
    ancho = d.getElementById(width),
    altura = d.getElementById(height),
    $cerrarVentana = d.getElementById(closeWindow),
    confVentana = `location=yes, scrollbar=yes, status=yes, innerWidth=${ancho.value}, innerHeight=${altura.value}`,
    ventana = open(direccionURL.value, "ventana", confVentana);

  $cerrarVentana.addEventListener("click", (e) => {
    ventana.close();
  });
}

import hamburgerMenu from "./js/menu_hamburguesa.js";
import { digitalClock, alarm } from "./js/reloj_alarma.js";
import { keyboardminigame, keyboardshortcuts } from "./js/eventos_teclado.js";
import { countdown } from "./js/cuenta_atras.js";
import scrollButton from "./js/boton_scroll.js";
import darkmode from "./js/boton_darkmode.js";
import responsiveMedia from "./js/responsive_object.js";
import responsiveTester from "./js/responsive_tester.js";
import deviceInfo from "./js/deteccion_dispositivos.js";
import networkStatus from "./js/detector_conexion.js";
import deteccionCamara from "./js/deteccion_camara.js";
import getGeolocation from "./js/geolocalizacion.js";
import searchFilter from "./js/filtro_busqueda.js";
import sorteo from "./js/sorteo_digital.js";
import slide from "./js/carrusel.js";
import scrollSpy from "./js/scroll_espia.js";
import videoInteligente from "./js/video_inteligente.js";
import contactFormValidations from "./js/validaciones_formulario.js";
import textSpeech from "./js/narrador.js";

const d = document,
  $responsiveTester = d.getElementById("responsiveTester");
let sound = new Audio("./assets/alarm.wav");
sound.loop = true;
sound.preload = true;

d.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panelBtn", ".panel", ".menu a");
  digitalClock("#clock", "#startClock", "#stopClock");
  alarm(sound, "#startAlarm", "#stopAlarm");
  countdown("#count", "Dec 25, 2022 00:03:00", "¡Feliz Navidad!");
  darkmode(".darkModeBtn", "darkMode");
  responsiveMedia(
    "youtube",
    "(min-width: 30em)",
    ` <a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "maps",
    "(min-width: 30em)",
    ` <a href="https://goo.gl/maps/4N4XTmR7xL2VsJ8RA" target="_blank" rel="noopener">Ver Mapa</a>`,
    `   <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31409.544317457236!2d-67.6057433!3d10.2460096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803c9b9611f813%3A0xcb82a26485afc729!2sCentro%20Comercial%20Paseo%20Estaci%C3%B3n%20Central!5e0!3m2!1ses!2sve!4v1662137422649!5m2!1ses!2sve"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  deviceInfo("user-agent");
  deteccionCamara("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  sorteo("#winner-btn", ".participante");
  slide();
  scrollSpy();
  videoInteligente();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  keyboardminigame(e, ".ball", ".area");
  keyboardshortcuts(e);
});

d.addEventListener("scroll", (e) => {
  scrollButton(".scrollBtn");
});

$responsiveTester.addEventListener("submit", (e) => {
  e.preventDefault();
  responsiveTester("url", "width", "height", "cerrarVentana");
});

networkStatus();
textSpeech();

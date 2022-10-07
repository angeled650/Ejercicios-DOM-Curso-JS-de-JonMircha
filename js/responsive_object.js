const d = document;

export default function responsiveMedia(id, mq, mobileCont, desktopCont) {
  let breakpoint = matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopCont;
    } else {
      d.getElementById(id).innerHTML = mobileCont;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}

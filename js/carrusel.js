const d = document;

export default function slide() {
  const $slide = d.querySelectorAll(".slider-slide"),
    $nextbtn = d.querySelector(".slider-btns .next"),
    $prevbtn = d.querySelector(".slider-btns .prev");
  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevbtn) {
      e.preventDefault();
      $slide[i].classList.remove("active");

      i--;

      if (i < 0) {
        i = $slide.length - 1;
      }

      $slide[i].classList.add("active");
    }

    if (e.target === $nextbtn) {
      e.preventDefault();
      $slide[i].classList.remove("active");

      i++;

      if (i >= $slide.length) {
        i = 0;
      }

      $slide[i].classList.add("active");
    }
  });
}

const d = document;

export default function scrollButton(btn) {
  let scrollyy = scrollY;
  const $btn = d.querySelector(btn);

  if (scrollyy >= 300) {
    $btn.classList.remove("hidden");
  } else $btn.classList.add("hidden");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      scroll(0, 0);
    }
  });
}

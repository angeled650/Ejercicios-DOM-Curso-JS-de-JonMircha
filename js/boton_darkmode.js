const d = document;

export default function darkmode(btn, classDark) {
  const $btn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-Dark]");
  let moon = "🌙",
    localStg = localStorage,
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $btn.classList.remove("is-active");
    $btn.textContent = moon;
    localStg.setItem("theme", "light");
  };

  const darkMode = () => {
    $btn.classList.add("is-active");
    $selectors.forEach((el) => el.classList.add(classDark));
    $btn.textContent = sun;
    localStg.setItem("theme", "dark");
  };

  if (localStg.getItem("theme") === null) localStg.setItem("theme", "light");
  if (localStg.getItem("theme") === "dark") darkMode();
  if (localStg.getItem("theme") === "light") lightMode();

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btn.textContent === moon) darkMode();
      else lightMode();
    }
  });
}

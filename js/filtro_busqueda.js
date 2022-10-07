const d = document;

export default function searchFilter(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.key === "Escape") e.target.value = "";
      d.querySelectorAll(selector).forEach((elem) =>
        elem.textContent.toLowerCase().includes(e.target.value)
          ? elem.classList.remove("filter")
          : elem.classList.add("filter")
      );
    }
  });

  d.querySelector(input).addEventListener("input", (e) => {
    if ("" == e.target.value) {
      d.querySelectorAll(selector).forEach((elem) =>
        elem.textContent.toLowerCase().includes(e.target.value)
          ? elem.classList.remove("filter")
          : elem.classList.add("filter")
      );
    }
  });
}

const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  const isOnLine = () => {
    const $div = d.createElement("div");

    if (n.onLine) {
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add("online-msg");
      $div.classList.remove("offline-msg");
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline-msg");
      $div.classList.remove("online-msg");
    }

    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => {
      d.body.removeChild($div);
    }, 2000);
  };

  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}

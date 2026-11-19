export function initialiseNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  if (!toggle || !navigation) return;
  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeMenu(); toggle.focus(); }
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
}
import { initialiseNavigation } from "./navigation.js";
import { initialiseTheme } from "./theme.js";
document.addEventListener("DOMContentLoaded", () => {
  initialiseNavigation();
  initialiseTheme();
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());
});
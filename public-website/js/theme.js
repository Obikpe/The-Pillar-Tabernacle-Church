export function initialiseTheme() {
  // The public site starts with a light theme. A theme switch can be added
  // later if requested; no theme preference is stored without user consent.
  document.documentElement.dataset.theme = "light";
}
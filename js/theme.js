const THEME_STORAGE_KEY = "nihongo_n5_theme";

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selectedTheme;
  localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", selectedTheme === "dark" ? "#020617" : "#dc2626");
  }

  updateThemeButton(selectedTheme);
}

function updateThemeButton(theme) {
  const icon = document.getElementById("themeToggleIcon");
  const text = document.getElementById("themeToggleText");
  const button = document.getElementById("themeToggle");

  if (!button) return;

  const isDark = theme === "dark";
  button.setAttribute("aria-label", isDark ? "Ganti ke light mode" : "Ganti ke dark mode");
  button.setAttribute("title", isDark ? "Ganti ke light mode" : "Ganti ke dark mode");

  if (icon) icon.textContent = isDark ? "☀️" : "🌙";
  if (text) text.textContent = isDark ? "Light" : "Dark";
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

(function initThemeEarly() {
  document.documentElement.dataset.theme = getPreferredTheme();
})();

window.addEventListener("DOMContentLoaded", () => {
  updateThemeButton(document.documentElement.dataset.theme || getPreferredTheme());

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});

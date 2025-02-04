// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.classList.add(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlElement.classList.add("dark");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  const isDarkMode = htmlElement.classList.contains("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

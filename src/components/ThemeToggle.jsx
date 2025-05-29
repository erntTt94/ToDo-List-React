export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      <img
        src={darkMode ? "images/icon-sun.svg" : "images/icon-moon.svg"}
        alt={darkMode ? "sun" : "moon"}
      />
    </button>
  );
}

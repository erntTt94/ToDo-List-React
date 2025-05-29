import ThemeToggle from "./ThemeToggle";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>TODO</h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

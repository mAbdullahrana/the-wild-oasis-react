import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState.js";

const DarkModeToggle = createContext();

function DarkModeToggleProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorageState(false);

  function toggleDarkMode() {
    setIsDark((darkMode) => !darkMode);
  }
  return (
    <DarkModeToggle.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeToggle.Provider>
  );
}

function useDarkModeToggle() {
  const value = useContext(DarkModeToggle);
  if (value === undefined)
    throw new Error(
      "Used DarkModeToggle outside of Provider. The context can only be used in children of the Provider"
    );
  return value;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useDarkModeToggle, DarkModeToggleProvider };

import { useEffect } from "react";
import { useDarkModeToggle } from "../context/DarkModeToggle.jsx";
import ButtonIcon from "./ButtonIcon.jsx";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";

function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkModeToggle();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;

import styled from "styled-components";
import Logout from "../features/authentication/Logout.jsx";
import ButtonIcon from "./ButtonIcon.jsx";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkMode.jsx";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <HiOutlineUser onClick={() => navigate("/account")} />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

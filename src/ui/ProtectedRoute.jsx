// import styled from "styled-components";
// import { useUser } from "../features/authentication/useUser.js";
// import Spinner from "./Spinner.jsx";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color--grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// function ProtectedRoute({ children }) {
//   const { isAuthenticated, isLoading } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated && !isLoading) navigate("/login");
//   }, [isAuthenticated, isLoading, navigate]);

//   if (isLoading)
//     return (
//       <FullPage>
//         <Spinner />
//       </FullPage>
//     );

//   if (isAuthenticated) return children;
// }

// export default ProtectedRoute;

import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50); /* Fixed CSS variable */
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, fetchStatus } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && fetchStatus !== "fetching") {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, fetchStatus, navigate]);

  // if (!isAuthenticated) navigate("/login");

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;

  // Explicit fallback for unauthenticated users
  return null;
}

export default ProtectedRoute;

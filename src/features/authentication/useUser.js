// import { useQuery } from "@tanstack/react-query";
// import { getUser } from "../../services/useAuth.js";

// export function useUser() {
//   const { data: user, isLoading } = useQuery({
//     queryKey: ["user"],
//     queryFn: getUser,
//   });

//   return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
// }

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth.js";

export function useUser() {
  const {
    isLoading,
    data: user,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    fetchStatus,
  };
}

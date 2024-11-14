import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "users",
        element: <Users />,
      },
      // Error fallback
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },

            error: {
              duration: 5000,
            },

            style: {
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-770)",
              fontSize: "1.3rem",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;

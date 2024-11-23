// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";

// import GlobalStyles from "./styles/GlobalStyles";
// import Dashboard from "./pages/Dashboard";
// import Bookings from "./pages/Bookings";
// import Cabins from "./pages/Cabins";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";
// import Account from "./pages/Account";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./ui/AppLayout";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Toaster } from "react-hot-toast";
// import Booking from "./pages/Booking.jsx";
// import CheckIn from "./pages/CheckIn.jsx";
// import ProtectedRoute from "./ui/ProtectedRoute.jsx";

// const router = createBrowserRouter([
//   {
//     element: (
//       <ProtectedRoute>
//         <AppLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <Navigate to="/dashboard" replace />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "account",
//         element: <Account />,
//       },
//       {
//         path: "bookings",
//         element: <Bookings />,
//       },
//       {
//         path: "bookings/:bookingId",
//         element: <Booking />,
//       },
//       {
//         path: "checkin/:bookingId",
//         element: <CheckIn />,
//       },
//       {
//         path: "cabins",
//         element: <Cabins />,
//       },

//       {
//         path: "settings",
//         element: <Settings />,
//       },
//       {
//         path: "users",
//         element: <Users />,
//       },
//       // Error fallback
//       {
//         path: "*",
//         element: <PageNotFound />,
//       },
//     ],
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
// ]);

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 60 * 1000,
//     },
//   },
// });

// function App() {
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <Toaster
//           position="top-right"
//           reverseOrder={false}
//           gutter={8}
//           containerStyle={{}}
//           toastOptions={{
//             // Define default options
//             className: "",
//             duration: 5000,

//             // Default options for specific types
//             success: {
//               duration: 3000,
//               theme: {
//                 primary: "green",
//                 secondary: "black",
//               },
//             },

//             error: {
//               duration: 5000,
//             },

//             style: {
//               backgroundColor: "var(--color-grey-0)",
//               color: "var(--color-grey-770)",
//               fontSize: "1.3rem",
//             },
//           }}
//         />
//         <ReactQueryDevtools initialIsOpen={false} />
//         <GlobalStyles />
//         <RouterProvider router={router} />
//       </QueryClientProvider>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
import Booking from "./pages/Booking";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeToggleProvider } from "./context/DarkModeToggle.jsx";
import CheckIn from "./pages/CheckIn.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeToggleProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<CheckIn />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "13px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeToggleProvider>
  );
}

export default App;

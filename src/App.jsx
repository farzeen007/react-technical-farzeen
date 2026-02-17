import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./layouts/Layout";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";

const RootLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  { element: <LoginPage />, path: "/", index: true },
  {
    element: <RootLayout />,
    path: "/dashboard",
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

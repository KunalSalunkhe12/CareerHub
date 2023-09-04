import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/Auth";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

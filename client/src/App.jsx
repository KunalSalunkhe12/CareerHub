import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import JobTracker from "./pages/JobTracker";
import AddJob from "./components/JobTracker/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "job-tracker",
        element: <JobTracker />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import JobTracker from "./pages/JobTracker/JobList";
import AddJob from "./pages/JobTracker/AddJob";
import JobDetail from "./pages/JobTracker/JobDetail";
import Guidance from "./components/JobTracker/Guidance";
import Checklist from "./components/JobTracker/Checklist";
import Post from "./components/Community/Posts/PostsMain";
import Templates from "./components/JobTracker/Templates";
import Keywords from "./components/JobTracker/Keywords";
import TemplateInout from "./components/JobTracker/TemplateInout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "community",
        element: <Post />,
      },
      {
        path: "input",
        element: <TemplateInout />,
      },
      {
        path: "job-tracker",
        children: [
          {
            index: true,
            element: <JobTracker />,
          },
          {
            path: "add-job",
            element: <AddJob />,
          },
          {
            path: ":jobId",
            element: <JobDetail />,
            children: [
              {
                index: true,
                element: <Guidance />,
              },
              {
                path: "checklist",
                element: <Checklist />,
              },
              {
                path: "templates",
                element: <Templates />,
              },
              {
                path: "keywords",
                element: <Keywords />,
              },
            ],
          },
        ],
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

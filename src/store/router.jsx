import { createBrowserRouter } from "react-router-dom";
import Red from "../features/Red";
import Blue from "../features/Blue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Defined multiple paths to different elements.
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blue",
        element: <Blue />,
      },
      {
        path: "/red",
        element: <Red />,
      },
    ],
  },
]);

export default router;

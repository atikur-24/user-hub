import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import UserDetails from "../users/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/user-details/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.id}`),
      },
    ],
  },
]);

export default router;

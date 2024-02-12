import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../errorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import AddUserForm from "../users/AddUserForm";
import UserDetails from "../users/UserDetails";
import UsersData from "../users/UsersData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/all-user",
        element: <UsersData />,
      },
      {
        path: "/user-details/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.id}`),
      },
      {
        path: "add-user",
        element: <AddUserForm />,
      },
    ],
  },
]);

export default router;

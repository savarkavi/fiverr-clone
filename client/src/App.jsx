import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
import AddGig from "./pages/AddGig";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Message from "./pages/Message";
import Messages from "./pages/Messages";
import MyGigs from "./pages/MyGigs";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import SuccessPayment from "./pages/SuccessPayment";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/addgig",
          element: <AddGig />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/payment/:id",
          element: <Payment />,
        },
        {
          path: "/success",
          element: <SuccessPayment />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import HomeUp from "../Pages/Home/HomeUp";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <HomeUp></HomeUp>
            },
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])
export default router;
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import HomeUp from "../Pages/Home/HomeUp";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";

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
                element: <ChefDetails></ChefDetails>
            }
        ]
    }
])
export default router;
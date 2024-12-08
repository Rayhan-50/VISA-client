
import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Allvisa from "../pages/Allvisa";
import AddVisa from "../pages/AddVisa";
import MyAddVisa from "../pages/MyAddVisa";
import MyVisaApplications from "../pages/MyVisaApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRoute from "../assets/PrivateRoute/PrivateRoute";
import VisaDetails from "../pages/VisaDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('https://visa-server-smoky.vercel.app/addVisa')
            },
            {
                path: "/all-visas",
                element: <Allvisa></Allvisa>,
                loader:()=>fetch('https://visa-server-smoky.vercel.app/addVisa')
            },
            {
                path: "/add-visa",
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>,
                
            },
            {
                path: "/my-visas",
                element: <PrivateRoute><MyAddVisa></MyAddVisa></PrivateRoute>,
            },
            {
                path: "/my-applications",
                element:<PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>,
                loader:()=>fetch('https://visa-server-smoky.vercel.app/myVisa')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
           
            
            {
                path: "/details/:_id",
                element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader:async({params})=>{
                    const res =await fetch("https://visa-server-smoky.vercel.app/addVisa")
                    const data =await res.json()
                    // console.log(data,params)
                    const singleVisa =data.find(d=>d._id ==params._id)
                    // console.log(singleVisa)
                    return singleVisa

                }
            },
        ],
    },
]);

export default routes;

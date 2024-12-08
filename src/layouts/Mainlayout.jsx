import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Header/Navbar';

// import  { Toaster } from 'react-hot-toast';


const Mainlayout = () => {
    return (
       
        <div>
       {/* <Toaster></Toaster> */}
       <ToastContainer></ToastContainer>
       <div className="h-24">
     <Navbar></Navbar>
       </div>
        <div className="min-h-[calc(100vh-260px)] py-12">
     <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    
    );
};

export default Mainlayout;
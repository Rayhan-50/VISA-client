// import React from "react";

// import { useContext } from "react";
// import { AuthContext } from "../components/AuthProvider/AuthProvider";
// import { NavLink } from "react-router-dom";

// const Login = () => {
//   const { handleGoogleLogin } = useContext(AuthContext);
//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     const name =e.target.name.value;
//     const photoUrl=e.target.photoUrl.value;
//     const email =e.target.email.value;
//     const password =e.target.password.value;
//     const confirmPassword=e.target.confirmPassword.value;
//     console.log(name,photoUrl,email,password,confirmPassword)
//     handleLogin(email,password)
// }

//   return (
//     <div>
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="card bg-base-100 w-3/5   shadow-2xl">
//           <h1 className="text-5xl font-bold text-center pt-4">Login now!</h1>
//           <form onSubmit={handleSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6 space-y-5   flex  justify-center items-center">
//               <button className="btn btn-primary w-full">Login</button>
//               <button className="btn btn-primary w-full" onClick={handleGoogleLogin}>
//                 Google
//               </button>
//             </div>
//           </form>
//           <h1  className="text-xl font-bold text-center p-4">
//             New to the website <span className="text-blue-600"><NavLink to="/register">Register</NavLink></span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useContext } from "react";
// import { AuthContext } from "../components/AuthProvider/AuthProvider";
// import { NavLink } from "react-router-dom";

// const Login = () => {
//   const { handleGoogleLogin, handleLogin ,handleLogout } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

    
//     console.log("Email:", email, "Password:", password);

   
//     handleLogin(email, password);
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
//       <div className="card bg-base-100 w-3/5 shadow-2xl">
//         <h1 className="text-5xl font-bold text-center pt-4">Login Now!</h1>
//         <form onSubmit={handleSubmit} className="card-body">
//           {/* Email Field */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="input input-bordered"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="input input-bordered"
//               required
//             />
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover">
//                 Forgot password?
//               </a>
//             </label>
//           </div>

//           {/* Action Buttons */}
//           <div className="form-control mt-6 space-y-4">
//             <button type="submit" className="btn btn-primary w-full">
//               Login
//             </button>
//             <button
//               type="button"
//               className="btn btn-primary w-full"
//               onClick={handleGoogleLogin}
//             >
//               Login with Google
//             </button>
//           </div>
//         </form>

//         {/* Register Prompt */}
//        <div className="flex justify-center items-center p-5">
//        <h1 className="text-xl font-bold text-center p-4">
//           New to the website?{" "}
//           <span className="text-blue-600">
//             <NavLink to="/register">Register</NavLink>
//           </span>
//         </h1>
//         <button className="btn btn-primary w-24" onClick={handleLogout}>Logout</button>
//        </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useContext, useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Login = () => {
  const { handleLogin, handleGoogleLogin ,handleLogOut } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return setError('Both email and password are required.');
    }

    handleLogin(email, password)
      .then(() => {
        toast.success('Login successful!');
        navigate('/'); 
      })
      .catch((error) => {
        setError(error.message || 'Login failed. Please try again.');
        toast.error(error.message || 'Login failed. Please try again.');
      });
  };

  const handleGoogleAuth = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success('Google Login successful!');
        navigate('/'); 
      })
      .catch((error) => {
        toast.error(error.message || 'Google Login failed.');
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-6 shadow-2xl">
        <div className="text-center lg:text-left mb-6">
          <h1 className="text-4xl font-bold">Login to Your Account</h1>
          <p className="py-4">
            Welcome back! Please log in to continue.
          </p>
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="form-control mb-6">
          <div className="form-control mb-6">
  <button
    type="button"
    onClick={() =>
      navigate("/forgot-password", {
        state: { email: document.querySelector('input[name="email"]').value },
      })
    }
    className="text-blue-500 hover:underline bg-transparent border-0 p-0"
  >
    Forgot Password?
  </button>
</div>

          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <div className="form-control mt-4">
            <button
              type="button"
              className="btn btn-outline btn-secondary w-full"
              onClick={handleGoogleAuth}
            >
              Sign in with Google
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Don't have an account?{' '}
              <NavLink to="/register" className="text-blue-500 hover:underline">
                Register here
              </NavLink>
             
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;




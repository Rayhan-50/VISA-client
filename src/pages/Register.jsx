// import React, { useContext } from 'react';
// import { AuthContext } from '../components/AuthProvider/AuthProvider';

// const Register = () => {
//     const {handleRegister} =useContext(AuthContext)

//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         const name =e.target.name.value;
//         const photoUrl=e.target.photoUrl.value;
//         const email =e.target.email.value;
//         const password =e.target.password.value;
//         const confirmPassword=e.target.confirmPassword.value;
//         console.log(name,photoUrl,email,password,confirmPassword)
//         handleRegister(email,password)
//     }
//     return (
//  <div className="hero bg-base-200 ">
  
 
//     <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
//       <form onSubmit={ handleSubmit} className="card-body">
//         <h1 className='text-5xl font-bold  text-center p-2'>Register now</h1>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-lg">Name</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             className="input input-bordered input-lg"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-lg">Photo URL</span>
//           </label>
//           <input
//             type="text"
//             name="photoUrl"
//             placeholder="Enter your photo URL"
//             className="input input-bordered input-lg"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-lg">Email</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="input input-bordered input-lg"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-lg">Password</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             className="input input-bordered input-lg"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-lg">Confirm Password</span>
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             className="input input-bordered input-lg"
//             required
//           />
//         </div>
//         <div className="form-control mt-6">
//           <button type="submit" className="btn btn-primary btn-lg w-full">Register</button>
//         </div>
//       </form>
//     </div>
 
// </div>


       
//     );
// };

// export default Register;



import React, { useContext, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Register = () => {
  const { handleRegister, handleGoogleLogin,manageProfile } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must include at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must include at least one lowercase letter.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
      return;
    } else {
      setPasswordError('');
    }

    if (password !== conPassword) {
      return toast.error('Passwords do not match!');
    }

    handleRegister(email, password)
      .then(() => {
        toast.success('Registration successful!');
        manageProfile(name,image)
        navigate('/'); 
      })
      .catch((error) => {
        toast.error(error.message || 'Registration failed. Please try again.');
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
      <h1 className="text-4xl font-bold">Register now!</h1>
      <p className="py-4">
        Join us today and share your unique profile with the world. It takes just a few moments
        to get started.
      </p>
    </div>
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />
      </div>
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
        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
      </div>
      <div className="form-control mb-6">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          name="conPassword"
          placeholder="Confirm Password"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control mt-4">
        <button className="btn btn-primary w-full">Register</button>
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
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </form>
  </div>
</div>


  );
};

export default Register;


import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from 'firebase/auth';
  import React, { createContext, useEffect, useState } from 'react';
  import { GoogleAuthProvider } from 'firebase/auth';
  import auth from '../../firebase/firebase.config';
  
  export const AuthContext = createContext();
  
  const AuthProvider = ({ routes }) => {
    const googleProvider = new GoogleAuthProvider();
  
    const [user, setUser] = useState(null);
    const [loading ,setLoading]=useState(true)
  
    const handleRegister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    
    };
  
    const handleLogin = (email, password) => {
     
      return signInWithEmailAndPassword(auth, email, password);
     
    };
  
    const handleGoogleLogin = () => {
      return signInWithPopup(auth, googleProvider);
    };
  
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  
    const handleLogOut = () => {
      return signOut(auth);
    };
  
    const authInfo = {
      handleRegister,
      handleLogin,
      handleGoogleLogin,
      handleLogOut,
      user,
      manageProfile,loading
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
        
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider value={authInfo}>
        {routes}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  
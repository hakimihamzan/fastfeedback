import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import React, { useState, useEffect, useContext, createContext } from 'react';
import app from './firebase';

const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const authContext = createContext();

export function ProvideAuth({ children }) {
  const authProvider = useProvideAuth();
  return (
    <authContext.Provider value={authProvider}>{children}</authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  console.log('user :>> ', user);

  const signinWithGithub = () => {
    return signInWithPopup(auth, githubProvider).then((response) => {
      setUser(response.user);
      return response.user;
    });
  };

  const signout = () => {
    return signOut(auth).then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  };
}

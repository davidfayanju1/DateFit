// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { firebase, db, auth } from "./firebase";
import { Alert } from "react-native";

// Create the Auth Context with default value
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const register = async (item) => {
    setIsLoading(true);
    try {
      const res = await auth.createUserWithEmailAndPassword(
        item.email,
        item.password
      );
      const user = res.user;

      await db.collection("users").doc(user.uid).set({
        id: user.uid,
        displayName: item.name,
        authProvider: "local",
        email: item.email,
        phoneNumber: item.number,
      });
    } catch (err) {
      console.log(err);
      Alert.alert("Error", err.message);
    } finally {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      Alert.alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserData = async (uid) => {
    try {
      const userDoc = await db.collection("users").doc(uid).get();
      if (userDoc.exists) {
        return userDoc.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(user, "User");

  const value = {
    user,
    login,
    logout,
    register,
    isLoading,
    setIsLoading,
    isSuccess,
    fetchUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

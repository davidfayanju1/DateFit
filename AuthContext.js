import React, { createContext, useState, useEffect, useContext } from "react";
import { firebase, db, auth } from "./firebase";
import { Alert } from "react-native";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Create the Auth Context with default value
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

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

      setUser(user);
    } catch (err) {
      console.log(err);
      Alert.alert("Error", err.message);
    } finally {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const login = async (item) => {
    setIsLoading(true);
    try {
      const res = await auth.signInWithEmailAndPassword(
        item.email,
        item.password
      );
      const user = res.user;

      setUser(user);
    } catch (error) {
      if (error) {
        setIsLoading(false);
        setIsSuccess(false);
        Alert.alert(error.message);
        console.error(error);
      }
    } finally {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
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

  const updateProfile = async (item) => {
    const userRef = doc(db, "users", user.uid);
    setIsLoading(true);

    if (user) {
      try {
        // Update displayName and photoURL
        await user.updateProfile({
          displayName: item.userName,
          // photoURL: item.photoURL, // If you have a photo URL to update
        });

        // Update other profile details in Firestore
        await setDoc(
          userRef,
          {
            gender: item.gender,
            height: item.height,
            country: item.country,
            state: item.state,
            dob: item.dob,
            userName: item.userName,
          },
          { merge: true }
        );

        console.log("Profile updated successfully");
        setIsSuccess(true);
      } catch (error) {
        console.error("Error updating profile:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("No user is signed in");
      setIsLoading(false);
    }
  };

  const fetchSingleUser = async (id) => {
    try {
      const userDoc = await db.collection("users").doc(id).get();
      if (userDoc.exists) {
        return userDoc.data();
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      throw error;
    }
  };

  const fetchAllUsers = async () => {
    try {
      const users = [];
      const querySnapshot = await db.collection("users").get();
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      return users;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User detected in onAuthStateChanged:", user);
        setUser(user);
      } else {
        console.log("No user detected in onAuthStateChanged");
        setUser(null);
      }
      setPageLoading(false);
    });

    return () => unsubscribe();
  }, []);

  console.log(user, "internal");

  const value = {
    user,
    login,
    logout,
    register,
    isLoading,
    setIsLoading,
    isSuccess,
    fetchUserData,
    updateProfile,
    fetchSingleUser,
    fetchAllUsers,
  };

  return (
    <AuthContext.Provider value={value}>
      {pageLoading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

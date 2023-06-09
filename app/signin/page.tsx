"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { redirect } from "next/navigation";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import InitialLoad from "@/components/Initial/InitialLoad";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../GlobalRedux/Features/userSlice";

import { User } from "firebase/auth";

const SignIn = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  //   const [user, setUser] = useState<any>(null);
  const dispatch = useDispatch();

  const [signInWithGoogle, appUser, loading, error] = useSignInWithGoogle(auth);

  const addUserFunc = async (user: User) => {
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      userId: user.uid,
    });
  };

  const createUserChat = async (id: string) => {
    const docRef = doc(db, "chats", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("exists");
      return;
    } else {
      await setDoc(doc(db, "chats", id), { chats: [] });
    }
  };

  const test = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (appUser) {
      const whatAppUser = {
        name: appUser.user.displayName,
        email: appUser.user.email,
        photoUrl: appUser.user.photoURL,
        userId: appUser.user.uid,
      };
      // console.log(user.user);
      addUserFunc(appUser.user);
      createUserChat(appUser.user.uid);
      dispatch(addUser(whatAppUser));
      redirect("/chat");
    }
  }, [appUser]);

  console.log(test.user);

  //   const signIn = async () => {
  //     try {
  //       const result = await signInWithPopup(auth, provider);
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const user = result.user;

  //       setUser(user);

  //       console.log("success", user);
  //     } catch (error: any) {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);

  //       console.log(errorCode, errorMessage, email, credential);
  //     }
  //   };

  //   if (user) {
  //     redirect("/");
  //   }

  return (
    <div>
      {!loading && (
        <button
          id="sign-in-button"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign In
        </button>
      )}
      {loading && <InitialLoad />}
    </div>
  );
};

export default SignIn;

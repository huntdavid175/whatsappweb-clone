"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { redirect } from "next/navigation";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import InitialLoad from "@/Components/Initial/InitialLoad";

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  //   const [user, setUser] = useState<any>(null);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    console.log(user);
    if (user) {
      redirect("/chat");
    }
  }, [user]);

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

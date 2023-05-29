"use client";

import InitialLoad from "@/components/Initial/InitialLoad";
import Presentation from "@/components/Initial/Presentation";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export default function Home() {
  // const [user, loading, error] = useAuthState(auth);
  const [user, setUser] = useState<User | null>(null);
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user);
        console.log("Player");
        setUser(user);
        setUserFetched(true);
        // ...
      } else {
        // User is signed out
        setUserFetched(true);
        setUser(null);
        // ...
      }
    });
    // return () => unSubscribe();
  }, []);

  const signoutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Signed out");
    } catch (error) {}
  };

  return (
    <main className="w-full min-h-screen bg-chatLayoutbg">
      <InitialLoad />
      <div className="relative" onClick={signoutHandler}>
        Hello
      </div>
      {/* {userFetched && user === null ? <Presentation /> : null} */}
      {userFetched ? user === null ? <Presentation /> : null : null}
    </main>
  );
}

//test push

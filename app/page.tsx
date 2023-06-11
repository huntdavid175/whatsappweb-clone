"use client";

import InitialLoad from "@/components/Initial/InitialLoad";
import Presentation from "@/components/Initial/Presentation";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { redirect } from "next/navigation";

import { RootState } from "@/app/GlobalRedux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "./GlobalRedux/Features/userSlice";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { db } from "@/firebase";

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

  // sign in

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

  const signInHandler = () => {
    signInWithGoogle();
  };

  const signoutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Signed out");
    } catch (error) {}
  };

  console.log(user);

  return (
    <main className="w-full min-h-screen bg-chatLayoutbg">
      <InitialLoad />
      <div className="relative" onClick={signoutHandler}>
        Hello
      </div>
      {/* {userFetched && user === null ? <Presentation /> : null} */}
      {userFetched ? (
        user === null ? (
          <Presentation signin={signInHandler} />
        ) : null
      ) : null}
    </main>
  );
}

//test push

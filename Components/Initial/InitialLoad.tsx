"use client";

import React from "react";
import AnimatedLogo from "../UI/AnimatedLogo";
import { BsFillLockFill } from "react-icons/bs";

const InitialLoad = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0  flex flex-col justify-center items-center">
      <AnimatedLogo />
      <div className="text-center space-y-2">
        <h3 className="font-semibold text-base text-gray-700">WhatsApp</h3>
        <div className="flex text-sm text-gray-500">
          <span>
            <BsFillLockFill />
          </span>
          <span> End-to-end encryption</span>
        </div>
      </div>
    </div>
  );
};

export default InitialLoad;

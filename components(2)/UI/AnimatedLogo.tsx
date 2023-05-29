"use client";

import React from "react";
import Lottie from "lottie-react";
import whatsappAnimation from "../Lottie/whatsapp-logo.json";

const AnimatedLogo = () => {
  return (
    <div className="w-60">
      <Lottie animationData={whatsappAnimation} />
    </div>
  );
};

export default AnimatedLogo;

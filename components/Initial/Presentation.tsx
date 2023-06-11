import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";

const Presentation = ({ signin }: { signin: any }) => {
  return (
    <div className="w-full pb-[96px]">
      <div className="w-full h-[222px] absolute top-0 -z-3 bg-whatsapp"></div>
      <div className="w-[1000px] relative flex items-center pt-8 space-x-4 m-auto">
        {/* <img src="/WHatsApp-Logo.wine.svg" width={100} />
         */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="39"
          viewBox="0 0 39 39"
        >
          <path
            fill="#00E676"
            d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
          ></path>
          <path
            fill="#FFF"
            d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
          ></path>
        </svg>
        <h3 className="text-white text-sm">WHATSAPP WEB</h3>
      </div>
      <div className="relative w-[1000px] m-auto bg-white rounded-sm shadow-2xl mt-16 pt-16  select-none">
        <div className="flex w-full">
          <div className="w-[50%] pb-44 px-16 ">
            <h2 className="text-2xl font-extralight">
              Use WhatsApp on your computer
            </h2>
            <div className="mt-14 space-y-4 text-lg font-light">
              <div>1. Open WhatsApp on your phone</div>
              <div>
                <p>2. Tap Menu or Settings and select Linked Devices </p>
              </div>
              <div>3. Tap on Link a device</div>
              <div>
                4. Point your phone to this screen to capture te QR code
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <button
              type="button"
              className="px-8 py-2 bg-whatsapp text-white"
              onClick={() => {
                signin();
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-whatsappInitBg py-12 space-y-3">
          <h4 className="text-2xl font-extralight">Tutorial</h4>
          <p className="text-sm text-teal-900">Need help to get started?</p>
          <div className="relative w-[540px] h-[314px] flex justify-center items-center cursor-pointer">
            <img className="mt-4 w-full" src="/images/whatsapp-pic.png" />
            <div className="p-4 bg-playerBg absolute rounded-full flex justify-center items-center ">
              <span className="text-4xl text-white">
                <BsFillPlayFill />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

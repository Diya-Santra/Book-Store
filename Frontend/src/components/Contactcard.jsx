import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircleMore, Mail } from "lucide-react";

const Contactcard = () => {
  return (
    <div className="max-w-screen mx-auto md:px-20 sm:px-4">
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <Link to="/">
          <button className="bg-pink-500 text-white rounded px-4 py-2 mt-10 hover:bg-pink-400 hover:scale-110 transition-transform duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        <div className="card bg-base-100 w-80 md:w-96 shadow-md rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
          <figure className="px-10 pt-10">
            <PhoneCall size={64} className="text-pink-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Call Us</h2>
            <p>+91 1234567890</p>
          </div>
        </div>

        <div className="card bg-base-100 w-80 md:w-96 shadow-md rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
          <figure className="px-10 pt-10">
            <MessageCircleMore size={64} className="text-green-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">WhatsApp Us</h2>
            <p>1234567890</p>
          </div>
        </div>

        <div className="card bg-base-100 w-80 md:w-96 shadow-md rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
          <figure className="px-10 pt-10">
            <Mail size={64} className="text-red-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mail Us</h2>
            <p>abc@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;

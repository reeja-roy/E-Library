import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600" onClick={()=>navigate('/')}>Logo</div>

      {/* Menu */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <h1
          className="hover:text-indigo-600 cursor-pointer transition duration-200"
          onClick={() => navigate("/")}
        >
          Home
        </h1>

        <h1
          className="hover:text-indigo-600 cursor-pointer transition duration-200"
          onClick={() => navigate("/library")}
        >
          Library
        </h1>

        <h1
          className="hover:text-indigo-600 cursor-pointer transition duration-200"
          onClick={() => navigate("/payment-history")}
        >
          Payment History
        </h1>

        <h1
          className="hover:text-indigo-600 cursor-pointer transition duration-200"
          onClick={()=>navigate("/profile")}
        >
          Profile
        </h1>
      </div>
    </div>
  );
};

export default Navbar;

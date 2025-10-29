import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authuser, setAuthUser] = useAuth();
  const handleLogOut = () => {
    try {
      setAuthUser({
        ...authuser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged Out successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      toast.error("Error" + err.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-2 py-1 bg-red-400 text-white ml-2 cursor-pointer rounded hover:bg-red-800 active:bg-red-800"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;

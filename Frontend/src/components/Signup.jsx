import React, { useEffect } from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Signup = () => {
  const [authuser, setAuthUser] = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const modal = document.getElementById("my_modal_2");
    if (modal) modal.showModal();
  }, []);

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("SignUp Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user);

          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error" + err.response.data.message);
        }
      });

    if (data.name && data.email && data.password) {
      const modal = document.getElementById("my_modal_2");
      if (modal) modal.close();
      navigate("/");
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box p-5 rounded-xl shadow-md shadow-gray-600">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/">
            <button
              type="button"
              className="btn btn-sm btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              ✕
            </button>
          </Link>

          <h3 className="font-bold text-lg mb-5 text-center">Sign Up</h3>

          {/* Name Field */}
          <div className="mb-5">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 mt-2 outline-none"
              {...register("fullName", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md p-2 mt-2 outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label className="block font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md p-2 mt-2 outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 active:bg-pink-700 active:scale-110 active:ease-in-out w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Signup;

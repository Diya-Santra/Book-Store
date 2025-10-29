import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  
  const onSubmit = async(data) => {
    const userInfo={
    email:data.email,
    password:data.password
   }

  await axios.post("http://localhost:4000/user/login",userInfo)
   .then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success('Logged In Successfully');
      setTimeout(() => {
        window.location.reload()
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }, 1000);
    }
    
   }).catch((err)=>{
        if(err.response){
          console.log(err);
          toast.error("Error"+err.response.data.message);
          setTimeout(() => {
            
          }, 2000);
        }
   })

    
    if (data.email && data.password) {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        modal.close(); 
        reset()
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box shadow-gray-600 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-5">Login</h3>

            
            <div className="mb-5">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter email"
                className="outline-0 mt-3 w-full border border-gray-300 rounded-md p-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

         
            <div>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter password"
                className="outline-0 mt-3 w-full border border-gray-300 rounded-md p-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

          
            <div className="flex justify-between mt-5 px-2">
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 active:scale-110 transition-all duration-200"
              >
                Login
              </button>

              <span className="mt-5 text-sm">
                <span>Not registered?</span>
                <Link
                  to="/signup"
                  className="text-sm underline text-blue-600 ml-1"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/user/${isSignup ? "signup" : "signin"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">
            {isSignup ? "Sign Up" : "Sign in"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {isSignup && (
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Full Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
              />
            )}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter your password",
                },
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              placeholder="Password"
            />

            {isSignup && (
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Please confirm your password",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                placeholder="Confirm Password"
              />
            )}
            <button
              type="submit"
              className="bg-custom_green w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              {isSignup ? "Create Account" : "Sign in"}
            </button>
          </form>
        </div>
        <div className="text-grey-dark mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={switchMode}
            className="no-underline border-b border-blue text-blue ml-2 text-custom_orange"
          >
            {isSignup ? "Sign in" : "Sign Up"}
          </button>
        </div>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default Auth;

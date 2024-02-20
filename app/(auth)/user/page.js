"use client";
import { createUser, loginUser } from "@/app/Redux/User.Slice";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const User = () => {
  const [variate, setVariate] = useState("LOGIN");
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const toggleVariant = () => {
    if (variate === "LOGIN") {
      setVariate("REGISTER");
    } else {
      setVariate("LOGIN");
    }
  };

  const onSubmit = async (data) => {
    if (variate === "LOGIN") {
      try {
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (res.error) {
          throw new Error(res.error);
        }

        router.push("/");
      } catch (error) {
        console.error("An error occurred during sign in:", error.message);
      }
    }
    if (variate === "REGISTER") {
      dispatch(createUser(data));
      reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-center items-center h-screen space-y-5 flex-col"
    >
      <h1
        className="text-4xl font-semibold text-black"
        style={{ fontFamily: "Poppins" }}
      >
        {variate === "LOGIN" ? "Login" : "Register"}
      </h1>
      {variate === "REGISTER" && (
        <Input
          label="Name"
          id="name"
          type="text"
          placeholder="Enter your name"
          errors={errors}
          register={register}
        />
      )}
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
        errors={errors}
        register={register}
        required={true}
      />
      {errors.email && (
        <p className="text-rose-500 text-sm">Email is required.</p>
      )}
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password"
        errors={errors}
        register={register}
        required={true}
      />
      {errors.password && (
        <p className="text-rose-500 text-sm">Password is required.</p>
      )}
      <div>
        {variate === "LOGIN"
          ? "Don't have an account?"
          : "Already have an account?"}
      </div>
      <div onClick={toggleVariant} className="underline cursor-pointer">
        {variate === "LOGIN" ? "Create an account" : "Login"}
      </div>
      <Button type="submit" variate={variate} />
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("github").then((res) => router.push("/"))}
      >
        Login with GitHub
      </button>
    </form>
  );
};

export default User;

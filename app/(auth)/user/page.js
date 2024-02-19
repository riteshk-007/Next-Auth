"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";

const User = () => {
  const [variate, setVariate] = useState("LOGIN");
  const {
    register,
    handleSubmit,
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

  const onSubmit = (data) => {
    if (variate === "LOGIN") {
      console.log("Login", data);
    }
    if (variate === "REGISTER") {
      console.log("Register", data);
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
    </form>
  );
};

export default User;

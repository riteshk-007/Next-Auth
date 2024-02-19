"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

const User = () => {
  const [variate, setVariate] = useState("LOGIN");
  return (
    <form className="w-full flex justify-center items-center h-screen space-y-5 flex-col">
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
        />
      )}
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      {variate === "LOGIN" ? (
        <span className="text-sm  text-black  flex gap-2">
          {" Don't have an account? "}{" "}
          <p
            className="cursor-pointer font-semibold"
            onClick={() => setVariate("REGISTER")}
          >
            Register
          </p>
        </span>
      ) : (
        <span className="text-sm  text-black  flex gap-2">
          Already have an account?
          <p
            className="cursor-pointer font-semibold"
            onClick={() => setVariate("LOGIN")}
          >
            Login
          </p>
        </span>
      )}
      <Button type="submit" variate={variate} />
    </form>
  );
};

export default User;

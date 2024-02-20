"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md shadow-md">
      <Image
        src={session?.user?.image}
        alt="user"
        width={70}
        height={70}
        className="rounded-full"
      />
      <h2 className="text-2xl font-bold mb-2">{session?.user?.name}</h2>
      <p className="text-gray-500 mb-4">{session?.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserInfo;

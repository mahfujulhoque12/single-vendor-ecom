import Link from "next/link";
import React from "react";
import { FaUserCheck } from "react-icons/fa";
import AddToCart from "./AddToCard";

const Account = () => {
  return (
    <div className="flex gap-10 items-center justify-center">
      <div>
        <AddToCart />
      </div>

      <div>
        <Link href="/card">
          <p className="text-gray-900 flex justify-center items-center gap-2">
            Account <FaUserCheck size={20} className="text-gray-900" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Account;

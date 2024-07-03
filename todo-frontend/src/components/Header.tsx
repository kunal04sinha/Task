// src/components/Header.js
import React from "react";
import { format } from "date-fns";
import { PlusIcon } from "@heroicons/react/24/solid";

const Header = ({ onClick }: { onClick?: () => void }) => {
  const todayDate = format(new Date(), "EEEE, dd MMM"); // e.g., "Wednesday, 03 Jul"

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-3xl">
      <div className="text-2xl font-bold">{todayDate}</div>
      <button
        className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full focus:outline-none"
        onClick={onClick}
      >
        <PlusIcon className="w-6 h-6 text-white" />
      </button>
    </header>
  );
};

export default Header;

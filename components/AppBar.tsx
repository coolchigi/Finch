import { useAuth } from "@pangeacyber/react-auth";
import React from "react";

const AppBar = () => {
  const { authenticated, login, logout } =
    useAuth();

  return (
    <header>
      
        {authenticated && (
          <button
            onClick={() => logout()}
            className="px-6 py-3.5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Sign Out
          </button>
        )}
        {!authenticated && (
          <button onClick={() => login()}
          className="px-6 py-3.5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Sign In
          </button>
        )}
       
    </header>
  );
};

export default AppBar;

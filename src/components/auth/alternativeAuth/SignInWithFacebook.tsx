import React from "react";

export default function SignInWithFacebook() {
  return (
    <div>
      <a
        href="#"
        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-blue-500 fill-blue-800 hover:fill-white"
      >
        <span className="sr-only">Sign in with Facebook</span>
        <svg
          className="h-5 w-5"
          // fill="blue"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
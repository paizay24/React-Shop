import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p class="text-gray-600 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to={'/'}
          class="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

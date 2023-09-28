import React from "react";

const Error = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl">404</h1>
            <p className="text-2xl">Page not found.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

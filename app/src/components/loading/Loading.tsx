// Loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center space-x-2 h-screen">
      <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-bounce1"></div>
      <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-bounce2"></div>
      <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-bounce3"></div>
    </div>
  );
};

export default Loading;

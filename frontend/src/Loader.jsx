import React from "react";

function Loader() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-24 w-24 animate-spin rounded-full border-8 border-solid border-gray-300 border-t-transparent"></div>
    </div>
  );
}

export default Loader;
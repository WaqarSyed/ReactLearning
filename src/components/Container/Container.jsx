import React from "react";

function Container({ children, className }) {
  return (
    <div className={`w-full px-4 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;

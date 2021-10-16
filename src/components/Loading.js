import React from "react";

const Loading = () => {
  return (
    <div className="text-center spinner">
      <div className="spinner-border" role="status">
        <span style={{ height: "400px" }} className="visually-hidden">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;

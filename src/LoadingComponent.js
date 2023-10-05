import React, { useEffect, useState } from "react";

const LoadingComponent = () => {
  const [point, setPoint] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(function () {
      if (point === 4) setPoint(1);
      else setPoint((prev) => prev + 1);
    }, 400);
    return () => {
      clearInterval(intervalId);
    };
  }, [point]);

  return <div className="loadingContainer">Loading {".".repeat(point)}</div>;
};

export default LoadingComponent;

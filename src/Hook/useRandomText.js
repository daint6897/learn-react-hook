import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function useRandomText(props) {
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    const randomTextInterval = setInterval(() => {
      const randomText =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      setRandomText(randomText);
    }, 1000);
    //clean up
    return () => {
      clearInterval(randomTextInterval);
    };
  }, []);
  return randomText;
}

export default useRandomText;

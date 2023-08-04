"use client";
import { useLayoutEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState<number>(1024);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
}

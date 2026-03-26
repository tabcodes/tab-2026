"use client";
import { useState, useEffect } from "react";

const FadeInDown = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${className} transition-all duration-1500 ease-out transform
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      {children}
    </div>
  );
};

export default FadeInDown;

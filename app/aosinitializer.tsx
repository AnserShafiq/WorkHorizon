"use client"; // Ensure it's a client component
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return null; // No UI needed, just runs the effect
}

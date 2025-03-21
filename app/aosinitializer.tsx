"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    import("aos").then((Aos) => {
      Aos.default.init({
        duration: 500,
        easing: "ease-in-out",
      });
    });
  }, []);

  return null; // No UI needed, just runs the effect
}

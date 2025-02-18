'use client'
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import HomeHead from "./ui/home/section1";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      Aos.init({
        duration: 500, // Customize your settings here
        easing: "ease-in-out",
      });
  }, []);
  return (
    <>
      <HomeHead />
    </>
  );
}

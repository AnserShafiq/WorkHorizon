'use client'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PageIntro from "../ui/about-us/section1";
import Vision_Mission from "../ui/about-us/vision-mission";
import LetsTalk from "../ui/home/letstalk";
import Values from '../ui/about-us/values';

export default function AboutUs(){
    useEffect(() => {
        Aos.init({
          duration: 500,
          easing: 'ease-in-out',
        });
      }, []);
    return(
    <>
      <PageIntro />
      <Vision_Mission />
      <Values />
      <LetsTalk />
    </>
    )
}
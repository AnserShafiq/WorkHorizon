'use client'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Suspense, useEffect } from "react";
import PageIntro from "../ui/about-us/section1";
import Loading from "../loading";
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
    <Suspense fallback={<Loading/>}>
            <PageIntro />
            <Vision_Mission />
            <Values />
            <LetsTalk />
    </Suspense>
    )
}
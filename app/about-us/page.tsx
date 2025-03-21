
import PageIntro from "../ui/about-us/section1";
import Vision_Mission from "../ui/about-us/vision-mission";
import LetsTalk from "../ui/home/letstalk";
import Values from '../ui/about-us/values';
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'About Us - Work Horizon'
}

export default function AboutUs(){
    return(
    <>
      <PageIntro />
      <Vision_Mission />
      <Values />
      <LetsTalk />
    </>
    )
}
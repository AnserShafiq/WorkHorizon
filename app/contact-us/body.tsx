'use client'

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import ContactForm from "../ui/contact-us/contactForm"

export default function ContactUsBody(){
    
    useEffect(() => {
        Aos.init({
            duration: 500,
            easing:'ease-in-out',
        })
    },[])
    return(
        <>
            <ContactForm/>
        </>
    )
}
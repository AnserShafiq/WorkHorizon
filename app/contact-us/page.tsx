
import { Metadata } from "next"
import ContactUsBody from "./body"


export const metadata:Metadata = {
    title: 'Contact Us - Work Horizon'
}

export default function ContactUs(){
    
    return(
        <>
            <ContactUsBody />
        </>
    )
}
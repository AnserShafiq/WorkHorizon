'use client'
import { useState,useEffect } from "react"

export default function Loading(){
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false),15000)
        return () => clearTimeout(timer)
    },[])
    if(!loading) return null;
    return(
        <div className="flex flex-col items-center justify-center absolute top-0 left-0 z-[999] bg-dullWhite h-screen w-screen">
            Loading...  
        </div>
    )
}
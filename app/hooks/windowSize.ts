'use client'

import { useEffect, useState } from "react"

export function TargetWindowCheck() {
    const [width, setWidth]= useState<string>('');
    useEffect(() => {
        function handleResize(){
            if(window.innerWidth > 1050){
                setWidth('D')
            }else if(window.innerWidth < 600){
                setWidth('M')
            }else {
                setWidth('T')
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize()

        return () => window.removeEventListener('resize', handleResize);
    },[])
    return width;
}
'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";


export default function SearchJob({placeholder} :{placeholder:string}){
    const searchParams = useSearchParams();
    const pathname = usePathname()
    const {replace} = useRouter()
    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Going to search => ${term}`);
        const params = new URLSearchParams(searchParams)
        if(term){
            params.set('query',term)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    },300)
    return(
        <div className='relative flex flex-1 flex-shrink-0'>
            <label htmlFor='search' className="sr-only">To Search</label>
            <input placeholder={placeholder} defaultValue={searchParams.get('query')?.toString()} onChange={(e) => handleSearch(e.target.value)}/>
        </div>
    )
}
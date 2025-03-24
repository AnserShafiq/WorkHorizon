import SingleMessage from "@/app/ui/portal/messages/singleMessage";



export default async function Page(props:{params: Promise<{id: string}>}){
    const params= await props.params
    const id = await params.id;
    const target = id ? id.split('-').pop() : ''
    return(
        <>
            <SingleMessage id={target}/>
        </>
    )
}
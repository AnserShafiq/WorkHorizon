import ApplicantDetails from "@/app/ui/portal/applicant-details";


export default async function Page(props:{params: Promise<{id: string}>}){
    const param= await props.params
    const id = await param.id;
    const target = id ? id.split('_').pop() : ''

    return(
        <>
            <ApplicantDetails id={target}/>
        </>
    )
}



export async function authentication(prevState: string|undefined , formData: FormData) {
    try{
        const data:Record<string, any> = {};
        formData.forEach((value,key) => {
            data[key] = value;
        })
        console.log('Data from Login Form => ',data)

        // const user 

        return({success: true})
    }catch(error:any){
        return ({error:'Error Message'})
    }
}


export default function NewAgentCreation(){
    const handleAgentAddition = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const toSubmit = {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            password: formData.get('password') || '',
            contact: formData.get('contact') || '',
            gender: formData.get('gender') || '',
            post: formData.get('post') || '',
        }
        const response = await fetch(`/api/agents/addNew`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(toSubmit)
        })

        if(response.ok){
            window.location.reload();
        }
    }
    return(
       <div className="mt-6 mb-10 border py-6 px-12 rounded-3xl shadow-xl shadow-gray-300 bg-gray-200">
            <h3 className='w-fit text-2xl mx-auto capitalize font-semibold text-sky-900 border-b border-orange-500 mb-4'>To add new agent</h3>
            <form className='grid grid-cols-3 gap-x-10 gap-y-3' onSubmit={handleAgentAddition}>
                <div className='flex flex-col'>
                    <label className='text-md font-semibold text-sky-900 mb-1'>Name:</label>
                    <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='name' name='name' placeholder='Enter name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md font-semibold text-sky-900 mb-1'>E-Mail:</label>
                    <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='email' name='email' placeholder='Enter name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md font-semibold text-sky-900 mb-1'>Password:</label>
                    <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='password' name='password' placeholder='Enter name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md font-semibold text-sky-900 mb-1'>Contact Number:</label>
                    <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='contact' name='contact' placeholder='Enter name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md font-semibold text-sky-900 mb-1'>Gender:</label>
                    <select className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='gender' name='gender'>
                        <option value={''} >{`Select gender`}</option>
                        <option value={'male'} >{`Male`}</option>
                        <option value={'female'} >{`Female`}</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='text-md font-semibold text-sky-900 mb-1'>Post:</label>
                    <select className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='post' name='post'>
                        <option value={''} >{`Select agent's post`}</option>
                        <option value={'Pak HR'} >{`Pak HR`}</option>
                        <option value={'Head HR'} >{`Head HR`}</option>
                        <option value={'Recruiter'} >{`Recruiter`}</option>
                    </select>
                </div>
                <div className='col-span-full flex items-center justify-center mt-4'>
                    <button type='submit' className=' px-4 py-2 text-gray-100 rounded-xl font-semibold tracking-wide bg-sky-900 border-2 border-transparent hover:border-sky-900 hover:text-sky-900 hover:bg-transparent w-fit mx-auto transition-transform ease-in-out duration-300 hover:scale-[1.03]'>Submit</button>
                </div>
            </form>
        </div> 
    )
}
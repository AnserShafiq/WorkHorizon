'use server'
import { signIn } from "@/auth";


export async function authentication( formData: FormData) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // console.log('Data from Login Form => ', data);

    const result = await signIn('credentials', {
      redirect: false,
      ...data,
    });

    // console.log('SignIn result:', result);
    if(result?.error)
    {
        if (result?.error === 'Invalid password') {
            return { error: 'From Auth Invalid password' };
        }else if(result?.error === 'User not found'){
            return { error: 'From Auth User not found' };  
        }
        return { error: "Authentication failed" }; // Generic error
    }
    
    return { success: true};
  } 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.error('Authentication error On Authentication.tsx');
    return { error: error.message || 'Authentication failed' };
  }
}
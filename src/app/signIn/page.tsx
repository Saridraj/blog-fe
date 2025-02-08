import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import api from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function SignIn() {

  const signIn = async (formData: FormData) => {
    'use server';

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const cookieStore = await cookies();

    try {
      const response = await api.post('/auth/signIn', {
        username,
        password,
      });

      if (response.data) {
        const {
          token,
          username,
          id
        } = response.data;
        cookieStore.set('accessToken', token);
        cookieStore.set('username', username);
        cookieStore.set('userId', id);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log("Redirecting to home...");
       
      }
  
    } catch (error) {
      console.log(error);
    }
    return redirect(`/`);
  };


  return (
    <div className='h-screen justify-end bg-green500 md:flex'>
      <div className='flex h-[40%] md:h-full w-full md:w-[40%] rounded-b-[20px] md:rounded-l-[20px] bg-green300 md:hidden'>
        <div className='flex h-[70%] w-full items-end justify-center'>
          <p className='font-[Castoro] text-[28px] italic text-white'>
            a Board
          </p>
        </div>
      </div>
      <div className='flex w-full items-center  justify-center h-[60%] md:h-full md:w-[60%]'>
        <form className='flex w-[384px] flex-col justify-start gap-5'>
          <h1 className='font-semiBold text-[28px] text-white'>Sign In</h1>
          <div>
            <Input
              type='text'
              name='username'
              placeholder='Username'
              className='h-[44px] w-[384px] bg-white'
              required
            />
          </div>

          <Button formAction={signIn} className='h-[44px] w-[384px] bg-success text-white'>
            Sign in
          </Button>
        </form>
      </div>
      <div className='hidden h-full w-[40%] rounded-l-[20px] bg-green300 md:flex'>
        <div className='flex h-[70%] w-full items-end justify-center'>
          <p className='font-[Castoro] text-[28px] italic text-white'>
            a Board
          </p>
        </div>
      </div>
    </div>
  );
}

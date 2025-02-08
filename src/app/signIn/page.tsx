import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
export default async function SignIn() {
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

          <Button className='h-[44px] w-[384px] bg-success text-white'>
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

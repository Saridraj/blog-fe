import { SquarePen, House } from 'lucide-react';
import { redirect } from 'next/navigation';
const SideBar = () => {
  const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };
  const userId = getCookie('userId');
  return (
    <div className='hidden h-full w-[290px] bg-gray100 p-[32px] sm:flex sm:flex-col'>
      <div
        onClick={() => redirect('/')}
        className='flex h-[40px] w-[290px] cursor-pointer items-center cursor-pointer'
      >
        <House className='mr-2 text-[24px]' />{' '}
        <p className='text-[16px]'>Home</p>
      </div>
      <div
        onClick={() => redirect(`/ourBlog/${userId}`)}
        className='flex h-[40px] w-[290px] cursor-pointer items-center cursor-pointer'
      >
        <SquarePen className='mr-2 text-[24px]' />{' '}
        <p className='text-[16px]'>Our Blog</p>
      </div>
    </div>
  );
};

export default SideBar;

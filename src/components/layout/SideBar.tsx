import { Menu, ArrowRight, SquarePen, House } from 'lucide-react';

const SideBar = () => {
  return (
    <div className='hidden h-full w-[290px] bg-gray100 p-[32px] sm:flex sm:flex-col'>
      <div className='flex h-[40px] w-[290px] items-center'>
        <House className='mr-2 text-[24px]' />{' '}
        <p className='text-[16px]'>Home</p>
      </div>
      <div className='flex h-[40px] w-[290px] items-center'>
        <SquarePen className='mr-2 text-[24px]' />{' '}
        <p className='text-[16px]'>Our Blog</p>
      </div>
    </div>
  );
};

export default SideBar;

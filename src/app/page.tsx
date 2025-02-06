import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import { Menu, ArrowRight, SquarePen, House } from 'lucide-react';

export default function Home() {
  return (
    <div className='bg-red-300 h-screen'>
      <NavBar />
      <div className='flex bg-red-200 h-full z-0 -mt-[60px] pt-[60px]'>
      <div className='w-[290px] h-full bg-gray100 p-[32px]'>
        <div className='flex items-center h-[40px]'><House className='text-[24px] mr-2' /> <p className='text-[16px]'>Home</p></div>
        <div className='flex items-center h-[40px]'><SquarePen className='text-[24px] mr-2' /> <p className='text-[16px]'>Our Blog</p></div>
      </div>
      <div className='bg-red-200 w-[798px] h-full'>s</div>
      </div>
      
    </div>
  );
}

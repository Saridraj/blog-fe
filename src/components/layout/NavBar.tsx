'use client';
import { Button } from '../ui/Button';
import { Menu, ArrowRight, SquarePen, House } from 'lucide-react';
import { redirect } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../ui/Dialog';
import { useState, useEffect } from 'react';
import { fetchAllUser } from '@/lib/userActions';
import Image from 'next/image';
import Default from '@/components/image/Default.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [users, setUser] = useState<any[]>([]);
  useEffect(() => {
    const handleResize = () => setIsSmScreen(window.innerWidth <= 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchAllUser().then((users) => {
      setUser(users);
    });
    if (!isSmScreen) setIsOpen(false);
  }, [isSmScreen]);

  const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };
  const username = getCookie('username');
  const userId= getCookie('userId');

  const user = users.find((user) => user.username === username);
  console.log('User:', user);
  return (
    <div className='z-999 text-foreground fixed relative flex h-[60px] w-full items-center justify-between bg-green500 px-[24] sm:px-[32px]'>
      <div onClick={() => redirect('/')} className='h-fit w-[69px]'>
        <p className='font-[Castoro] text-[20px] italic text-white'>a Board</p>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Menu className='h-[24px] w-[24px] text-[24px] text-white sm:hidden' />
        </DialogTrigger>
        <DialogContent
          className='h-full w-[280px] rounded-l-[12px] border-none bg-green500 text-white'
          style={{
            transform: 'none',
            left: 'auto',
            right: '0',
            top: '0',
            bottom: '0',
          }}
        >
          <DialogHeader>
            <DialogTitle></DialogTitle>

            <DialogDescription className='absolute top-0 h-full w-full pr-[32px] pt-[24px]'>
              <DialogClose className='mb-[24px] h-[24px] w-full'>
                <ArrowRight className='text-[10px]' />
              </DialogClose>
              <div     onClick={() => redirect('/')} className='flex h-[40px] items-center cursor-pointer'>
                <House className='mr-2 text-[24px]' />{' '}
                <p className='text-[16px]'>Home</p>
              </div>
              <div  onClick={() => redirect(`/ourBlog/${userId}`)} className='flex h-[40px] items-center cursor-pointer'>
                <SquarePen className='mr-2 text-[24px]' />{' '}
                <p className='text-[16px]'>Our Blog</p>
              </div>
              <div>
                {username ? (
                  <>{username}</>
                ) : (
                  <>
                    <Button
                      onClick={() => redirect('/signIn')}
                      className='h-[40px] w-[105px] bg-success text-white sm:flex'
                    >
                      SignIn
                    </Button>
                  </>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {username ? (
        <>
          <div className='hidden sm:flex items-center'>
            <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300 overflow-hidden'>
              <Image
                width={30}
                height={30}
                alt='avatar'
                src={user?.avatarURL || Default.src}
              />
            </div>
            <p className='text-white'>{user?.username}</p>
          </div>
        </>
      ) : (
        <>
          <Button
            onClick={() => redirect('/signIn')}
            className='h-[40px] w-[105px] bg-success text-white sm:flex'
          >
            SignIn
          </Button>
        </>
      )}
    </div>
  );
};

export default NavBar;

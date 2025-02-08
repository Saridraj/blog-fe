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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsSmScreen(window.innerWidth <= 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isSmScreen) setIsOpen(false);
  }, [isSmScreen]);

  return (
    <div className='z-999 text-foreground fixed relative flex h-[60px] w-full items-center justify-between bg-green500 px-[24] sm:px-[32px]'>
      <div    onClick={() => redirect('/')} className='h-fit w-[69px]'>
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
              <div className='flex h-[40px] items-center'>
                <House className='mr-2 text-[24px]' />{' '}
                <p className='text-[16px]'>Home</p>
              </div>
              <div className='flex h-[40px] items-center'>
                <SquarePen className='mr-2 text-[24px]' />{' '}
                <p className='text-[16px]'>Our Blog</p>
              </div>
              <div>
                <Button
                  onClick={() => redirect('/signIn')}
                  className='h-[40px] w-[105px] bg-success text-white sm:flex'
                >
                  SignIn
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        onClick={() => redirect('/signIn')}
        className='hidden h-[40px] w-[105px] bg-success text-white sm:flex'
      >
        SignIn
      </Button>
    </div>
  );
};

export default NavBar;

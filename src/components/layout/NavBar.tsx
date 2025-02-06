'use client';
import { Button } from '../ui/Button';
import { Menu } from 'lucide-react';
import { redirect } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '../ui/Dialog';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmScreen, setIsSmScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmScreen(window.innerWidth <= 640);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isSmScreen) {
            setIsOpen(false);
        }
    }, [isSmScreen]);

    return (
        <div className='text-foreground flex h-[60px] w-full items-center justify-between bg-green500 px-[32px]'>
            <div className='h-[24px] w-[69px]'>
                <p className='font-[Castoro] text-[20px] italic text-white'>a Board</p>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className='h-[24px] w-[24px] text-white sm:hidden'>
                        <Menu />
                    </Button>
                </DialogTrigger>
                <DialogContent className='h-full w-[280px]  bg-green500 border-none rounded-l-[12px] text-white'
                    style={{
                        transform: "none",
                        left: "auto",
                        right: "0",
                        top: "0",
                        bottom: "0",
                    }} >
                    <DialogHeader>
                        <DialogTitle>Menu</DialogTitle>
                        <DialogDescription>
                            {/* Add your menu items here */}
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

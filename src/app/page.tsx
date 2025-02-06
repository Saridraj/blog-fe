import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';

export default function Home() {
  return (
    <div className='bg-red-300'>
      <NavBar />
      <Button className='bg-green300' />
    </div>
  );
}

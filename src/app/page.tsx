'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { Input } from '@/components/ui/Input';
import {
  Menu,
  ArrowRight,
  SquarePen,
  House,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import PostLists from '@/components/post/PostList';
type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function Home() {
  const [showHistory, setShowHistory] = React.useState<Checked>(true);
  const [showFood, setShowFood] = React.useState<Checked>(false);
  const [showPets, setShowPets] = React.useState<Checked>(false);
  const [showHealth, setShowHealth] = React.useState<Checked>(false);
  const [showFashion, setShowFashion] = React.useState<Checked>(false);
  const [showExercise, setShowExercise] = React.useState<Checked>(false);
  const [showOthers, setShowOthers] = React.useState<Checked>(false);

  const post = [
    {
      id: 1,
      topic: '1 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'History',
    },
    {
      id: 2,
      topic: '2 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'Food',
    },
    {
      id: 3,
      topic: '3 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'History',
    },
    {
      id: 4,
      topic: '4 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'Pets',
    },
  ];

  const comments = [
    {
      id: 1,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 1,
    },
    {
      id: 2,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 1,
    },
    {
      id: 3,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 2,
    },
    {
      id: 4,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 3,
    },
    {
      id: 5,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 4,
    },
  ];


  const posts = post.map(p => ({
    ...p,
    comments: comments.filter(c => c.postId === p.id) // Attach matching comments
  }));

  console.log(posts)
  return (
    <div className='h-screen overflow-hidden bg-red-300'>
      <NavBar />
      <div className='z-0 -mt-[60px] flex h-full pt-[60px]'>
        <SideBar />
        <div className='h-full w-full bg-gray100 p-[30px]'>
          <div className='h-[60px] w-[798]'>
            <div className='flex h-[40px] w-full'>
              <div className='h-full w-[150px] rounded-[8px] sm:w-[798px]'>
                <Input
                  className='h-full w-full placeholder-gray-500'
                  type='text'
                  placeholder='Search'
                ></Input>
              </div>
              <div className='h-full w-[128px]'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className='flex h-full items-center p-1'>
                      <p className='text-[14px]'>Community</p>{' '}
                      <ChevronDown className='w-[16px]' />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56 bg-white'>
                    <DropdownMenuCheckboxItem
                      checked={showHistory}
                      onCheckedChange={(checked) => setShowHistory(checked)}
                    >
                      History
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showFood}
                      onCheckedChange={(checked) => setShowFood(checked)}
                    >
                      Food
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPets}
                      onCheckedChange={(checked) => setShowPets(checked)}
                    >
                      Pets
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showHealth}
                      onCheckedChange={(checked) => setShowHealth(checked)}
                    >
                      Health
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showFashion}
                      onCheckedChange={(checked) => setShowFashion(checked)}
                    >
                      Fashion
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showExercise}
                      onCheckedChange={(checked) => setShowExercise(checked)}
                    >
                      Exercise
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showOthers}
                      onCheckedChange={(checked) => setShowOthers(checked)}
                    >
                      Others
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className='h-full w-[105px]'>
                <Button className='h-[40px] bg-success sm:w-[105px]'>
                  <p className='hidden text-[14px] text-white sm:flex'>
                    Create +
                  </p>
                  <p className='text-white sm:hidden'>+</p>
                </Button>
              </div>
            </div>
          </div>
          <div className='h-screen overflow-hidden overflow-y-auto pb-[200px] hide-scrollbar sm:w-[798]'>
            <div className='min-h-[1000px] rounded-[16px] border-none bg-white stroke-none'>
              <PostLists postLists={posts}/>
              {/* <div className='h-[200px] w-full border p-[20px]'>
                <div className='flex h-[31px] w-full items-center'>
                  <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                  <p>username</p>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>History</p>
                  </div>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <p className='text-[16px truncate font-semibold'>
                    The Beginning of the End of the World
                  </p>
                </div>
                <div className='h-[30px] w-full overflow-hidden'>
                  <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                    The afterlife sitcom The Good Place comes to its
                    culmination, the show’s two protagonists, Eleanor and Chidi,
                    contemplate their future. Having lived thousands upon
                    thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer sadsadsd
                    sdasdssadsadsd
                  </p>
                </div>
                <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                  <MessageCircle className='w-[16px]' /> ... comments
                </div>
              </div>
              <div className='h-[200px] w-full border p-[20px]'>
                <div className='flex h-[31px] w-full items-center'>
                  <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                  <p>username</p>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>History</p>
                  </div>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <p className='text-[16px truncate font-semibold'>
                    The Beginning of the End of the World
                  </p>
                </div>
                <div className='h-[30px] w-full overflow-hidden'>
                  <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                    The afterlife sitcom The Good Place comes to its
                    culmination, the show’s two protagonists, Eleanor and Chidi,
                    contemplate their future. Having lived thousands upon
                    thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer sadsadsd
                    sdasdssadsadsd
                  </p>
                </div>
                <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                  <MessageCircle className='w-[16px]' /> ... comments
                </div>
              </div>
              <div className='h-[200px] w-full border p-[20px]'>
                <div className='flex h-[31px] w-full items-center'>
                  <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                  <p>username</p>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>History</p>
                  </div>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <p className='text-[16px truncate font-semibold'>
                    The Beginning of the End of the World
                  </p>
                </div>
                <div className='h-[30px] w-full overflow-hidden'>
                  <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                    The afterlife sitcom The Good Place comes to its
                    culmination, the show’s two protagonists, Eleanor and Chidi,
                    contemplate their future. Having lived thousands upon
                    thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer sadsadsd
                    sdasdssadsadsd
                  </p>
                </div>
                <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                  <MessageCircle className='w-[16px]' /> ... comments
                </div>
              </div>
              <div className='h-[200px] w-full border p-[20px]'>
                <div className='flex h-[31px] w-full items-center'>
                  <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                  <p>username</p>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>History</p>
                  </div>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <p className='text-[16px truncate font-semibold'>
                    The Beginning of the End of the World
                  </p>
                </div>
                <div className='h-[30px] w-full overflow-hidden'>
                  <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                    The afterlife sitcom The Good Place comes to its
                    culmination, the show’s two protagonists, Eleanor and Chidi,
                    contemplate their future. Having lived thousands upon
                    thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer sadsadsd
                    sdasdssadsadsd
                  </p>
                </div>
                <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                  <MessageCircle className='w-[16px]' /> ... comments
                </div>
              </div>
              <div className='h-[200px] w-full border p-[20px]'>
                <div className='flex h-[31px] w-full items-center'>
                  <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                  <p>username</p>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>History</p>
                  </div>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <p className='text-[16px truncate font-semibold'>
                    The Beginning of the End of the World
                  </p>
                </div>
                <div className='h-[30px] w-full overflow-hidden'>
                  <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                    The afterlife sitcom The Good Place comes to its
                    culmination, the show’s two protagonists, Eleanor and Chidi,
                    contemplate their future. Having lived thousands upon
                    thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer sadsadsd
                    sdasdssadsadsd
                  </p>
                </div>
                <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                  <MessageCircle className='w-[16px]' /> ... comments
                </div>
              </div>
              <div className='h-[200px] w-full border p-[20px]'>
                <div className='flex h-[31px] w-full items-center'>
                  <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                  <p>username</p>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>History</p>
                  </div>
                </div>
                <div className='mt-[8px] h-[24px] w-full'>
                  <p className='text-[16px truncate font-semibold'>
                    The Beginning of the End of the World
                  </p>
                </div>
                <div className='h-[30px] w-full overflow-hidden'>
                  <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                    The afterlife sitcom The Good Place comes to its
                    culmination, the show’s two protagonists, Eleanor and Chidi,
                    contemplate their future. Having lived thousands upon
                    thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer sadsadsd
                    sdasdssadsadsd
                  </p>
                </div>
                <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                  <MessageCircle className='w-[16px]' /> ... comments
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

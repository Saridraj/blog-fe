'use client';
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useParams } from 'next/navigation';
import {
  ChevronDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/Dialog';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import OurBlogPostLists from '@/components/post/OurBlogPostList';
type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function OurBlog() {
  // const [showHistory, setShowHistory] = React.useState<Checked>(true);
  // const [showFood, setShowFood] = React.useState<Checked>(false);
  // const [showPets, setShowPets] = React.useState<Checked>(false);
  // const [showHealth, setShowHealth] = React.useState<Checked>(false);
  // const [showFashion, setShowFashion] = React.useState<Checked>(false);
  // const [showExercise, setShowExercise] = React.useState<Checked>(false);
  // const [showOthers, setShowOthers] = React.useState<Checked>(false);
  const community = [
    { key: 'showHistory', label: 'History' },
    { key: 'showFood', label: 'Food' },
    { key: 'showPets', label: 'Pets' },
    { key: 'showHealth', label: 'Health' },
    { key: 'showFashion', label: 'Fashion' },
    { key: 'showExercise', label: 'Exercise' },
    { key: 'showOthers', label: 'Others' },
  ];
  const [selectedCommunity, setSelectedCommunity] = useState<
    string | null
  >(null);

  // const toggleCommunity = (key: string, checked: boolean) => {
  //   setSelectedCommunity((prev) => ({ ...prev, [key]: checked }));
  // };

  const post = [
    {
      id: 1,
      topic: '1 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'History',
      createdBy: 1,
    },
    {
      id: 2,
      topic: '2 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'Food',
      createdBy: 1,
    },
    {
      id: 3,
      topic: '3 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'History',
      createdBy: 2,
    },
    {
      id: 4,
      topic: '4 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'Pets',
      createdBy: 2,
    },
  ];

  const comments = [
    {
      id: 1,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username1',
      postId: 1,
    },
    {
      id: 2,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username1',
      postId: 1,
    },
    {
      id: 3,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username2',
      postId: 2,
    },
    {
      id: 4,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username2',
      postId: 3,
    },
    {
      id: 5,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username2',
      postId: 4,
    },
  ];
  const params = useParams();
    const userId = params?.userId;

  const posts = post.map((p) => ({
    ...p,
    comments: comments.filter((c) => c.postId === p.id), // Attach matching comments
  }))
  const userPosts = posts.filter((p) => p.createdBy === Number(userId));

  console.log(posts);
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
                    <div className='flex h-full cursor-pointer items-center p-1'>
                      <p className='text-[14px]'>Community</p>{' '}
                      <ChevronDown className='w-[16px]' />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56 bg-white'>
                    {community.map(({ key, label }) => (
                      <DropdownMenuCheckboxItem
                        key={key}
                        checked={selectedCommunity === key}
                        onCheckedChange={(checked) =>
                          setSelectedCommunity(checked ? key : null)
                        }
                      >
                        {label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Dialog>
                <DialogTrigger>
                  <div className='h-full w-[105px]'>
                    <Button className='h-[40px] bg-success sm:w-[105px]'>
                      <div className='hidden text-[14px] text-white sm:flex'>
                        Create +
                      </div>
                      <div className='text-white sm:hidden'>+</div>
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className='h-fit w-[90%] bg-white sm:max-w-[685px]'>
                  <DialogHeader>
                    <DialogTitle className='flex justify-start text-[28px]'>
                      Create Post
                    </DialogTitle>

                    <DialogDescription className='h-full w-full'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className='flex h-[40px] w-full sm:w-[195px] items-center border border-success p-1 text-[14px] text-success'>
                            <p className='text-[14px]'>Choose a community</p>{' '}
                            <ChevronDown className='w-[16px]' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56 bg-white'>
                          {community.map(({ key, label }) => (
                            <DropdownMenuCheckboxItem
                              key={key}
                              checked={selectedCommunity === key}
                              onCheckedChange={(checked) =>
                                setSelectedCommunity(checked ? key : null)
                              }
                            >
                              {label}
                            </DropdownMenuCheckboxItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Input
                        className='my-3 h-[44px] max-w-[625px]'
                        placeholder='Title'
                      />
                      <Textarea
                        className='my-3 h-[234px] max-w-[625px]'
                        placeholder='What’s on your mind...'
                      />
                      <div className='flex flex-col sm:flex-row sm:h-[40px] sm:justify-end  sm:gap-2'>
                        <DialogClose className='mb-[24px] h-[24px]'>
                          <Button
                            // onClick={() => redirect('/signIn')}
                            className='h-[40px] w-full  sm:w-[105px] border border-success text-success'
                          >
                            Cancel
                          </Button>
                        </DialogClose>

                        <Button
                          // onClick={() => redirect('/signIn')}
                          className='h-[40px] w-full sm:w-[105px] bg-success text-white sm:flex'
                        >
                          Post
                        </Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className='h-screen overflow-hidden overflow-y-auto pb-[200px] hide-scrollbar sm:w-[798]'>
            <div className='h-fit rounded-[16px] border-none bg-white stroke-none'>
              <OurBlogPostLists postLists={userPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

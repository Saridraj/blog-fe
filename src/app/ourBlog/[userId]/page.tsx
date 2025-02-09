'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useParams } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
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

import { fetchPostOfUser } from '@/lib/postActions';
import { fetchAllComment } from '@/lib/commentActions';
import { fetchAllUser } from '@/lib/userActions';

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
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(
    null
  );

  const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };
  const id = getCookie('userId');

  const [post, setPost] = useState<any[]>([]);
  const [user, setUser] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  console.log(post);

  useEffect(() => {
    if (id) {
      fetchPostOfUser(id).then((posts) => {
        setPost(posts);
      });
    }

    fetchAllComment().then((comments) => {
      setComments(comments);
    });
    fetchAllUser().then((users) => {
      setUser(users);
    });
  }, []);

  const params = useParams();
  const userId = params?.userId;

  const posts = post.map((p) => ({
    ...p,
    comments: comments.filter((c) => c.postId === p.id),
    createdBy: user?.filter((u) => u.id === p.createdBy),
  }));
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
                          <Button className='flex h-[40px] w-full items-center border border-success p-1 text-[14px] text-success sm:w-[195px]'>
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
                      <div className='flex flex-col sm:h-[40px] sm:flex-row sm:justify-end sm:gap-2'>
                        <DialogClose className='mb-[24px] h-[24px]'>
                          <Button
                            // onClick={() => redirect('/signIn')}
                            className='h-[40px] w-full border border-success text-success sm:w-[105px]'
                          >
                            Cancel
                          </Button>
                        </DialogClose>

                        <Button
                          // onClick={() => redirect('/signIn')}
                          className='h-[40px] w-full bg-success text-white sm:flex sm:w-[105px]'
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
              <OurBlogPostLists postLists={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

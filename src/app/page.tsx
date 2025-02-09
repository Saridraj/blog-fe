'use client';
import * as React from 'react';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
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
import PostLists from '@/components/post/PostList';
type Checked = DropdownMenuCheckboxItemProps['checked'];

import { useState, useEffect } from 'react';
import { fetchAllPost, createPost } from '@/lib/postActions';
import { fetchAllComment } from '@/lib/commentActions';
import { fetchAllUser } from '@/lib/userActions';
import { redirect } from 'next/navigation';

export default function Home() {
  const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };
  const username = getCookie('username');
  const id = getCookie('userId');

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
  const [communitySelected, setCommunitySelected] = useState<string>('');
  const [postSearch, setPostSearch] = useState<string>('');
  const [post, setPost] = useState<any[]>([]);
  const [user, setUser] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);

  const [newCommunity, setNewCommunity] = useState<string>('');
  const [newTopic, setNewTopic] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');

  const handleCreateNewPostSubmit = () => {
    createPost({
      community: newCommunity,
      topic: newTopic,
      content: newContent,
      createdBy: id,
    });

    window.location.reload();
  };

  useEffect(() => {
    fetchAllPost().then((posts) => {
      console.log(posts);
      setPost(posts);
    });
    fetchAllUser().then((users) => {
      setUser(users);
    });
    fetchAllComment().then((comments) => {
      setComments(comments);
    });
  }, []);

  const posts = post?.map((p) => ({
    ...p,
    comments: comments.filter((c) => c.postId === p.id),
    createdBy: user?.filter((u) => u.id === p.createdBy),
  }));



  const filterPosts = () => {
    let filteredPosts = posts;


    if (communitySelected) {
      filteredPosts = filteredPosts.filter((p) =>
        p.community?.includes(communitySelected)
      );
    }


    if (postSearch?.length >= 2) {
      filteredPosts = filteredPosts.filter((p) =>
        p.topic.toLowerCase().includes(postSearch.toLowerCase())
      );
    }

    return filteredPosts;
  };
  const postsFiltered = filterPosts();


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
                  onChange={(e) => setPostSearch(e.target.value)}
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
                        onCheckedChange={(checked) => {
                          setSelectedCommunity(checked ? key : null);
                          setCommunitySelected(checked ? label : '');
                        }}
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

                    {id ? (
                      <>
                        <DialogDescription className='h-full w-full'>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button className='flex h-[40px] w-full items-center border border-success p-1 text-[14px] text-success sm:w-[195px]'>
                                {newCommunity !== '' ? (
                                  <>
                                    <p className='text-[14px]'>
                                      {newCommunity}
                                    </p>{' '}
                                  </>
                                ) : (
                                  <>
                                    <p className='text-[14px]'>
                                      Choose a community
                                    </p>{' '}
                                  </>
                                )}
                                <ChevronDown className='w-[16px]' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56 bg-white'>
                              {community.map(({ key, label }) => (
                                <DropdownMenuCheckboxItem
                                  key={key}
                                  checked={selectedCommunity === key}
                                  onCheckedChange={(checked) => {
                                    setSelectedCommunity(checked ? key : null);
                                    setNewCommunity(checked ? label : '');
                                  }}
                                >
                                  {label}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <Input
                            value={newTopic}
                            onChange={(e) => setNewTopic(e.target.value)}
                            className='my-3 h-[44px] max-w-[625px]'
                            placeholder='Title'
                          />
                          <Textarea
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
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
                              onClick={handleCreateNewPostSubmit}
                              className='h-[40px] w-full bg-success text-white sm:flex sm:w-[105px]'
                            >
                              Post
                            </Button>
                          </div>
                        </DialogDescription>
                      </>
                    ) : (
                      <>
                        <DialogDescription className='h-full w-full'>
                          <div className='flex h-[100px] w-full flex-col items-center justify-center rounded-[8px] border border-success'>
                            <p>Please sign in to create new post.</p>
                            <Button
                              onClick={() => redirect('/signIn')}
                              className='h-[40px] w-[105px] bg-success text-white sm:flex'
                            >
                              SignIn
                            </Button>
                          </div>
                        </DialogDescription>
                      </>
                    )}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className='h-screen overflow-hidden overflow-y-auto pb-[200px] hide-scrollbar sm:w-[798]'>
            <div className='h-fit rounded-[16px] border-none bg-white stroke-none'>
              <PostLists postLists={postsFiltered} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

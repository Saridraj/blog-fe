'use client';
import { MessageCircle, Pencil, Trash2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/Dialog';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Button } from '../ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const OurBlogPostCard = ({ postList }: any) => {
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
  return (
    <div
      //onClick={() => redirect(`/postDetail/${postList.id}`)}
      className='h-[200px] w-full p-[20px]'
    >
      <div className='flex h-[31px] w-full items-center justify-between'>
        <div className='flex'>
          <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
          <p>username</p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger>
              <div className='flex text-green300'>
                <Pencil className='mx-2 w-[16px] cursor-pointer' />
              </div>
            </DialogTrigger>
            <DialogContent className='h-fit w-[90%] bg-white sm:max-w-[685px]'>
              <DialogHeader>
                <DialogTitle className='flex justify-start text-[28px]'>
                  Edit Post
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
                      Confirm
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className='flex text-green300'>
                <Trash2 className='mx-2 w-[16px] cursor-pointer' />
              </div>
            </DialogTrigger>
            <DialogContent className='h-fit w-[90%] bg-white sm:max-w-[400px]'>
              <DialogHeader>
                <DialogTitle className='flex w-full justify-center text-center text-[18px]'>
                  Please confirm if you wish to <br />
                  delete the post
                </DialogTitle>

                <DialogDescription className='h-full w-full'>
                  <p className='text-center text-[16]'>
                    Are you sure you want to delete the post? <br /> Once
                    deleted, it cannot be recovered.
                  </p>

                  <div className='flpxex-col flex sm:h-[40px] sm:flex-row sm:justify-center sm:gap-2 mt-8'>
                    <DialogClose className='mb-[24px] h-[24px]'>
                      <Button
                        // onClick={() => redirect('/signIn')}
                        className='h-[44px] w-full border border-gray500 text-gray500 sm:flex sm:w-[170px]'
                      >
                        Cancel
                      </Button>
                    </DialogClose>

                    <Button
                      // onClick={() => redirect('/signIn')}
                      className='h-[44px] w-full bg-red-500 text-white sm:flex sm:w-[170px]'
                    >
                      Delete
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='mt-[8px] h-[24px] w-full'>
        <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
          <p className='text-[12px]'>{postList.community}</p>
        </div>
      </div>
      <div className='mt-[8px] h-[24px] w-full'>
        <p className='truncate text-[16px] font-semibold'>{postList.topic}</p>
      </div>
      <div className='h-[30px] w-full overflow-hidden'>
        <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
          {postList.content}
        </p>
      </div>
      <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
        <MessageCircle className='w-[16px]' /> {postList.comments.length}{' '}
        comments
      </div>
    </div>
  );
};

export default OurBlogPostCard;

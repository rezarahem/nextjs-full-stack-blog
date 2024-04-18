import Container from '@/components/ui/container';
import prismadb from '@/libs/prismadb';
import { Post } from '@prisma/client';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const getFirstWords = (input: string, numWords: number) => {
  const words = input.split(' ');
  const firstWords = words.slice(0, numWords);

  return firstWords.join(' ');
};

const blog = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: 'asc',
    },
  });

  return (
    <div>
      <Container className='sm:pt-8'>
        <div className='grid grid-cols-1 gap-8 divide-y sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/blog/${post.address}`}
              className='flex flex-row-reverse justify-between gap-y-1 pt-8 sm:flex-col sm:rounded-md sm:border sm:pt-0 sm:shadow-lg sm:transition sm:duration-500 sm:ease-out sm:hover:scale-105 sm:hover:shadow-2xl'
            >
              <div className='relative h-44 w-48 overflow-hidden rounded-md sm:w-full sm:rounded-b-none sm:rounded-t-md'>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes='100vw'
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col justify-between p-2'>
                <div className='space-y-3'>
                  <h2 className='font-bold'>{post.title}</h2>
                  <p className='text-gray-600'>
                    {getFirstWords(post.body, 10)} ...
                  </p>
                </div>
                <div className='flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-3 py-2 sm:hidden'>
                  <p className='text-xs'>ادامه مطلب</p>
                  <MoveLeft className='size-4' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default blog;

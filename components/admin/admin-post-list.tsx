import prismadb from '@/libs/prismadb';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DeletePostButton from './delete-post-button';

const AdminPostList = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: 'asc',
    },
  });

  return (
    <div>
      <div className='space-y-4'>
        {posts.map((post) => (
          <div key={post.id} className='flex gap-x-2'>
            <div className='flex flex-1 items-start gap-x-4 rounded-md bg-gray-100 px-3 py-4 shadow-sm'>
              <div className='relative size-20'>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes='100vw'
                  className='rounded-md border object-cover shadow-md'
                />
              </div>
              <h3 className='text-2xl font-bold'>{post.title}</h3>
            </div>
            <div className='flex flex-col gap-y-2'>
              <DeletePostButton id={post.id} />

              <Link
                href={`/blog/${post.address}`}
                className='rounded-md bg-gray-100 p-4 text-blue-500 shadow-md hover:bg-gray-200'
              >
                <ExternalLink className='size-5' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPostList;

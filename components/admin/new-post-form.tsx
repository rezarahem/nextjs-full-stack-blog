'use client';

import { useRef } from 'react';
import SubmitButton from '../ui/submit-button';
import { CreatePostAction } from '@/actions/post-action';

const NewPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formdata) => {
        formRef.current?.reset();

        await CreatePostAction(formdata);
      }}
      className='space-y-6'
    >
      <div className='flex flex-col gap-y-1'>
        <label>عنوان</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          placeholder='پست جدید'
          name='title'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>توضیحات</label>
        <textarea
          rows={5}
          className='rounded-md border p-2 shadow-sm'
          placeholder='شرح پست'
          name='body'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>تصویر</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          placeholder='آدرس تصویر'
          name='iamge'
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default NewPostForm;

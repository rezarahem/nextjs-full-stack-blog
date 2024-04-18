'use client';

import { CheckUserEmail } from '@/actions/auth-action';
import SubmitButton from '../ui/submit-button';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res = await CheckUserEmail(formdata);

        if (!res?.success) {
          redirect('/register');
        } else {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>ورود</h2>
      <input
        type='email'
        placeholder='ایمیل'
        className='rounded-md border p-2 shadow-sm'
        name='email'
      />
      <input
        type='password'
        placeholder='رمز عبور'
        className='rounded-md border p-2 shadow-sm'
        name='password'
      />
      <SubmitButton />
    </form>
  );
};

export default LoginForm;

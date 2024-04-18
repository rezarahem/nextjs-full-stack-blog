import RegisterForm from '@/components/auth/register-form';
import Container from '@/components/ui/container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Register = async () => {
  const session = await getServerSession(authOption);

  if (session?.user.usreId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>
        <RegisterForm />
        <div className='mt-8'>
          <Link href='/login' className='hover:text-blue-600'>
            <p className='text-center'>
              نام نویسی کرده‌اید، برای ورود کلیک کنید
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;

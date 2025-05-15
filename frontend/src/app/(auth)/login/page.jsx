'use client';
import LoginForm from '@/components/LoginForm.jsx';

export default function Login() {
  return (
    <div className='h-screen space-y-10 flex flex-col items-center justify-center'>
          <div className='flex w-[30%] bg-[#1e1e1e] p-5 rounded-lg flex-col items-center justify-center space-y-10'>
            <h1 className='text-[30px] font-extrabold '>Login</h1>
            <LoginForm />
          </div>
        </div>
  );
}

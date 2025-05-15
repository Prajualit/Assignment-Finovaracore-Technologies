'use client';
import SignupForm from '@/components/SignupForm.jsx';

export default function Signup() {
  return (
    <div className='h-screen space-y-10 flex flex-col items-center justify-center'>
      <div className='flex w-[30%] bg-[#1e1e1e] p-5 rounded-lg flex-col items-center justify-center space-y-10'>
        <h1 className='text-[30px] font-extrabold '>Signup</h1>
        <SignupForm />
      </div>
    </div>
  );
}
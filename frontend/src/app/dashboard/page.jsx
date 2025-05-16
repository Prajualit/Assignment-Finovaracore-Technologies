"use client";
import { useState } from 'react';
import AadhaarForm from '@/components/AadhaarForm';
import ResultCard from '@/components/ResultCard';
import axios from '@/utils/api'; // assuming this is your axios instance
import { useRouter } from 'next/navigation'; // for Next.js navigation

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post('/users/logout', {}, { withCredentials: true });
      router.push('/login'); // Redirect to login after logout
    } catch (error) {
      console.log("Logout failed:", error.message);
    }
  };

  return (
    <div className='h-screen space-y-10 flex flex-col items-center justify-center'>
      <div className='flex w-[30%] bg-[#1e1e1e] p-5 rounded-lg flex-col items-center justify-center space-y-10'>
        <h1 className='text-[30px] font-extrabold '>Dashboard</h1>
        <AadhaarForm setResult={setResult} />
        {result && <ResultCard result={result.data} />}
      </div>
      <button
        onClick={handleLogout}
        className='absolute right-5 bottom-5 px-5 py-2 bg-white hover:bg-[#ff4a4a] transition-colors duration-300 rounded-lg text-black font-bold cursor-pointer hover:text-white'
      >
        Logout
      </button>
    </div>
  );
}

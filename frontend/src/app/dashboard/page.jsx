'use client';
import { useEffect, useState } from 'react';
import AadhaarForm from '@/components/AadhaarForm.jsx';
import ResultCard from '@/components/ResultCard.jsx';

export default function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <div className='h-screen space-y-10 flex flex-col items-center justify-center'>
      <div className='flex w-[30%] bg-[#1e1e1e] p-5 rounded-lg flex-col items-center justify-center space-y-10'>
        <h1 className='text-[30px] font-extrabold '>Dashboard</h1>
        <AadhaarForm setResult={setResult} />
        {result && <ResultCard result={result.data} />}
      </div>
    </div>
  );
}
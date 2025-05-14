'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AadhaarForm from '@/components/AadhaarForm.jsx';
import ResultCard from '@/components/ResultCard.jsx';

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) router.push('/login');
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <AadhaarForm setResult={setResult} />
      {result && <ResultCard result={result} />}
    </div>
  );
}
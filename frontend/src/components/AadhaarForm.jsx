import { useState } from 'react';
import axios from '../utils/api';

export default function AadhaarForm({ setResult }) {
  const [aadhaar, setAadhaar] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/aadhaar/status',
        { aadhaar, dob },
        { withCredentials: true }
      );
      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-6 justify-center w-full'>
      <div className='flex flex-col space-y-2'>
        <label className='text-left text-sm '>Aadhaar Number :</label>
        <input placeholder="Aadhaar" value={aadhaar} onChange={e => setAadhaar(e.target.value)} required className='w-full bg-[#141414] rounded-md p-3 shadow-md hover:shadow-lg focus-within:shadow-lg outline-none transition-all duration-300' />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='text-left text-sm '>Date of Birth :</label>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} required className='w-full bg-[#141414] rounded-md p-3 shadow-md hover:shadow-lg focus-within:shadow-lg outline-none transition-all duration-300' />
      </div>
      <button className='bg-[#dbdbdb] text-[black] font-bold cursor-pointer rounded-md py-3 px-6 shadow-sm shadow-[#d8d8d880] hover:shadow-md focus:shadow-none transition-all duration-300' type="submit">Check Status</button>
    </form>
  );
}
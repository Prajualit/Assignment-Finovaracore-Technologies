'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/api.js';

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Retailer');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/users/register', { username, password, role });
            console.log('User registered successfully');
            router.push('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSignup} className='flex flex-col space-y-6 items-center justify-center w-full'> 
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className='w-full bg-[#141414] rounded-md p-3 shadow-md hover:shadow-lg focus-within:shadow-lg outline-none transition-all duration-300'
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className='w-full bg-[#141414] rounded-md p-3 shadow-md hover:shadow-lg focus-within:shadow-lg outline-none transition-all duration-300'
            />
            <select value={role} onChange={e => setRole(e.target.value)} required className='w-full bg-[#141414] outline-none rounded-md p-3 shadow-md hover:shadow-lg transition-all duration-300 focus-within:shadow-lg'>
                <option value="Admin">Admin</option>
                <option value="Distributor">Distributor</option>
                <option value="Retailer">Retailer</option>
            </select>
            <button className=' bg-[#dbdbdb] text-[black] font-bold cursor-pointer rounded-md py-3 px-6 shadow-sm shadow-[#d8d8d880] hover:shadow-md focus:shadow-none transition-all duration-300 ' type="submit">Signup</button>
            <div className='text-sm'>
                Already have an account?&nbsp;
                <a href="/login" className='text-[#dbdbdb] hover:underline font-bold cursor-pointer transition-all duration-300'>Login</a>
            </div>
        </form>
    );
}
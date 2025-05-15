import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '../utils/api';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/users/login', { username, password });
            console.log('Login successful');
            router.push('/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <form onSubmit={handleLogin} className='flex flex-col space-y-6 items-center justify-center w-full'>
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
            <button type="submit" className=' bg-[#dbdbdb] text-[black] font-bold cursor-pointer rounded-md py-3 px-6 shadow-sm shadow-[#d8d8d880] hover:shadow-md focus:shadow-none transition-all duration-300 '>Login</button>
            <div className='text-sm'>
                Don't have an account?&nbsp;
                <a href="/signup" className='text-[#dbdbdb] hover:underline font-bold cursor-pointer transition-all duration-300'>Signup</a>
            </div>
        </form>
    );
}

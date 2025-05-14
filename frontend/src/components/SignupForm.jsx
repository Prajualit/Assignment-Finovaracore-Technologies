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
            await axios.post('/register', { username, password, role });
            alert('User registered successfully');
            router.push('/login');
        } catch (err) {
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <select value={role} onChange={e => setRole(e.target.value)} required>
                <option value="Admin">Admin</option>
                <option value="Distributor">Distributor</option>
                <option value="Retailer">Retailer</option>
            </select>
            <button type="submit">Signup</button>
        </form>
    );
}
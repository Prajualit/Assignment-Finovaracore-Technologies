import { useState } from 'react';
import axios from '../utils/api';

export default function AadhaarForm({ setResult }) {
  const [aadhaar, setAadhaar] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/aadhaar-status', { aadhaar, dob }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResult(res.data);
    } catch (err) {
      alert('Error checking status');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Aadhaar" value={aadhaar} onChange={e => setAadhaar(e.target.value)} required />
      <input type="date" value={dob} onChange={e => setDob(e.target.value)} required />
      <button type="submit">Check Status</button>
    </form>
  );
}
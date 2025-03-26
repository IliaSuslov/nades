'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { FaUser } from 'react-icons/fa';

const dev = process.env.NODE_ENV !== 'production';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const socket = io(
      dev ? 'http://localhost:3000' : 'https://nades.onrender.com',
      {
        transports: ['websocket', 'polling'],
        secure: true,
      }
    );
    console.log(dev, socket);
    socket.on('connect', () => console.log('Connected to server'));
    socket.on('connect_error', err =>
      console.error('Connection error:', err.message)
    );
    socket.on('visitorCountUpdate', data => {
      console.log('Visitor count:', data);
      setVisitorCount(data.count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-2 border text-white px-4 py-3 rounded-lg shadow-lg">
      <div className="flex justify-center items-center gap-2">
        <FaUser className="w-6 h-6" />
        <h1 className="text-2xl font-bold">{visitorCount}</h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="animate-pulse bg-green-500 w-2 h-2 rounded-md"></div>
        <p className="text-sm text-gray-400">Online users count</p>
      </div>
    </div>
  );
};

export default VisitorCounter;

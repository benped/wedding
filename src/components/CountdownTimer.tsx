// src/components/CountdownTimer.tsx
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const weddingDate = new Date('2025-05-03');
      const today = new Date();
      const difference = weddingDate.getTime() - today.getTime();
      const days = Math.ceil(difference / (1000 * 3600 * 24));
      setDaysLeft(days);
    };

    calculateDays();
    const timer = setInterval(calculateDays, 86400000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:fixed md:block right-0 top-0 h-screen w-16 bg-gray-800 overflow-hidden z-50">
      <div
        className="animate-scroll whitespace-nowrap"
        style={{
          fontFamily: 'Andale Mono, monospace',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          left: '50%',
          width: '100vh',
          textAlign: 'center',
          color: 'white',
          fontSize: '16px',
          letterSpacing: '1px',
          transformOrigin: 'center left'
        }}
      >
        {Array(50).fill(`${daysLeft} DAYS TO GO! `).join(' ')}
      </div>
    </div>
  );
};

export default CountdownTimer;
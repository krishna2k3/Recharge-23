import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(2023, 2, 23,0 ,0, 0); 
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(targetDate - now, 0); // calculate the time difference between now and the target date
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // calculate the number of days
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); // calculate the number of hours
      const minutes = Math.floor((diff / (1000 * 60)) % 60); // calculate the number of minutes
      const seconds = Math.floor((diff / 1000) % 60); // calculate the number of seconds
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container bg-black">
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-value">{countdown.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{countdown.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{countdown.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{countdown.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;

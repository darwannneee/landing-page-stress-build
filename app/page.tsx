"use client"
import { useState, useEffect } from 'react';
import { addDays, differenceInSeconds } from 'date-fns';
import { Reddit_Mono } from "next/font/google";

const RedditMono = Reddit_Mono({
  weight: "400",
  display: "auto",
  subsets: ["latin"]
});

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Get target date from localStorage or set it to 30 days from now if not set
    let targetDate = localStorage.getItem('targetDate');
    if (!targetDate) {
      targetDate = addDays(new Date(), 30).toISOString();
      localStorage.setItem('targetDate', targetDate);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const secondsLeft = differenceInSeconds(target, now);

      if (secondsLeft >= 0) {
        const days = Math.floor(secondsLeft / (3600 * 24));
        const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = secondsLeft % 60;

        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`h-screen flex flex-col justify-center items-center text-center text-[#e5e5e5] bg-[#0d0d0d] ${RedditMono.className}`}>
      <h1 className="text-2xl md:text-5xl 2xl:text-8xl">Our Website is Under Construction</h1>
      <h2 className='text-sm pt-5 md:text-2xl 2xl:text-5xl xl:pt-7 2xl:pt-10'>
        {`${timeLeft.days} day${timeLeft.days !== 1 ? 's' : ''} : ${timeLeft.hours} hour${timeLeft.hours !== 1 ? 's' : ''} : ${timeLeft.minutes} min : ${timeLeft.seconds} sec`}
      </h2>
    </div>
  );
}

"use client"
import { useState, useEffect } from 'react';
import { addDays, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { Reddit_Mono } from "next/font/google";


const RedditMono = Reddit_Mono({
  weight: "400",
  display: "auto",
  subsets: ["latin"]

})
export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = addDays(new Date(), 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const secondsLeft = differenceInSeconds(targetDate, now);
      const days = Math.floor(secondsLeft / (3600 * 24));
      const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`h-screen flex flex-col justify-center items-center text-center text-[#e5e5e5] bg-[#0d0d0d] ${RedditMono.className}`}>
        <h1 className="text-2xl md:text-5xl 2xl:text-8xl">Our Website is Under Construction</h1>
        <h2 className='text-sm pt-5 md:text-2xl 2xl:text-5xl xl:pt-7 2xl:pt-10'>{`${timeLeft.days} day : ${timeLeft.hours} hours : ${timeLeft.minutes} min : ${timeLeft.seconds} sec`}</h2>
    </div>
  );
}

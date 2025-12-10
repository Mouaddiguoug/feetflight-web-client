import { useEffect, useState } from "react";

const CountdownTimer = () => {
  // --- FIX 1: Set a FUTURE target date (e.g., March 1, 2026) ---
  const targetDate = new Date("2026-01-15T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // --- FIX 2: Stop the timer when distance <= 0 ---
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsCounting(false);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]); // targetDate is constant, but kept for effect dependency clarity

  // --- Render based on timer status ---
  return (
    <div className="flex flex-col items-center gap-6">
      {isCounting ? (
        <div className="flex items-center gap-4 md:gap-8">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      ) : (
        <div className="text-4xl font-bold text-lime-400">
            Full Release! 🎉
        </div>
      )}
      
      <p className="text-sm text-zinc-500 uppercase tracking-wider flex items-center gap-2">
        <span className={isCounting ? "inline-block w-1 h-1 rounded-full bg-lime-400" : "hidden"} />
        {isCounting ? "Left until full release" : "The product has been fully released!"}
      </p>
    </div>
  );
};

// Helper component for cleaner JSX
const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider mt-1">
      {label}
    </div>
  </div>
);

export default CountdownTimer;
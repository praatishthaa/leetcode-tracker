import { useEffect, useState } from "react";
import codey from "../assets/codey.png"; // your cute cat image

const quotes = [
  "You're not behind, you're building 💖",
  "Hot girls debug 🔥",
  "Every bug you fix is a flex 💅",
  "Your hustle >>> your self-doubt 👑",
  "You eat for dinner what others can’t even imagine for breakfast 🍽️",
];

const CodeyCat = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getRandomQuote = () =>
      quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(getRandomQuote());

    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="fixed bottom-6 right-6 z-50  flex items-center gap-3 max-w-[300px] animate-fade-in">

      {/* Speech bubble */}
      <div className="relative bottom-24 left-20 w-70 bg-white text-plumDark font-medium text-[0.95rem] p-6 rounded-3xl shadow-xl max-w-[360px]">

        <p className="italic leading-snug">“{quote}”</p>
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45 shadow-md" />
      </div>

      {/* Cat image */}
      <img
        src={codey}
        alt="Codey the Cat"
        className="w-100 h-100 drop-shadow-xl hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default CodeyCat;

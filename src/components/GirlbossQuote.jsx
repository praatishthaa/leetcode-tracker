const quotes = [
  "You're not behind, you're building 💖",
  "Hot girls debug 🔥",
  "You eat for dinner what others can’t even imagine for breakfast. Keep going queen 🍽️",
  "Every bug you fix is a flex 💅",
  "Your hustle >>> your self-doubt 💻👑",
  "You're not lazy — you're healing, then coding. Period. 🌸",
  "Every line you write is rewriting your future 🔥",
  "You’re not confused. You’re upgrading. 🧠✨",
];

const GirlbossQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="mt-10 text-center max-w-md px-4">
      <p className="text-base font-medium italic  bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-xl shadow-md">
        “{quote}”
      </p>
    </div>
  );
};

export default GirlbossQuote;

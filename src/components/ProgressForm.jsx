import { useState } from "react";

const ProgressForm = ({ onUpdate }) => {
  const [todaySolved, setTodaySolved] = useState("");
  const [totalSolved, setTotalSolved] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = parseInt(todaySolved);
    const total = parseInt(totalSolved);
    if (!isNaN(today) && !isNaN(total)) {
      onUpdate(today, total);
      setTodaySolved("");
      setTotalSolved("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blush border border-dustyMagenta p-6 rounded-2xl shadow-md mt-10 max-w-md w-full text-black font-sans"
    >
      <h2 className="text-2xl font-semibold text-popPink mb-6 tracking-wide">
        Update Progress 💻
      </h2>

      <div className="mb-4 text-left">
        <label className="block mb-1 font-medium text-earthy">
          Problems Solved Today
        </label>
        <input
          type="number"
          value={todaySolved}
          onChange={(e) => setTodaySolved(e.target.value)}
          className="w-full p-3 rounded-lg border-2 border-dustyMagenta focus:outline-none focus:ring-2 focus:ring-popPink bg-white bg-opacity-80"
          required
        />
      </div>

      <div className="mb-6 text-left">
        <label className="block mb-1 font-medium text-earthy">
          Total Problems Solved
        </label>
        <input
          type="number"
          value={totalSolved}
          onChange={(e) => setTotalSolved(e.target.value)}
          className="w-full p-3 rounded-lg border-2 border-dustyMagenta focus:outline-none focus:ring-2 focus:ring-popPink bg-white bg-opacity-80"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-popPink text-white py-2 px-6 rounded-xl hover:bg-dustyMagenta transition-all shadow-sm"
      >
        Update Tracker ✨
      </button>
    </form>
  );
};

export default ProgressForm;

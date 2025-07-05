import { useState } from "react";

const ProgressForm = ({ onUpdate }) => {
  const [today, setToday] = useState("");
  const [total, setTotal] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todayVal = parseInt(today) || 0;
    const totalVal = parseInt(total) || 0;
    const targetVal = parseInt(target) || 0;
    onUpdate({ today: todayVal, total: totalVal, target: targetVal });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-80 border-2 border-dustyMagenta p-6 rounded-2xl shadow-lg mt-10 max-w-md mx-auto text-black font-sans"
    >
      <h2 className="text-2xl font-semibold text-popPink mb-6 text-center">
        Leetcode Glow-Up Tracker ✨
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-earthy">Problems Solved Today</label>
          <input
            type="number"
            value={today}
            onChange={(e) => setToday(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-dustyMagenta focus:outline-none focus:ring-2 focus:ring-popPink bg-white bg-opacity-80"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-earthy">Total Problems Solved</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-dustyMagenta focus:outline-none focus:ring-2 focus:ring-popPink bg-white bg-opacity-80"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-earthy">Target</label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-dustyMagenta focus:outline-none focus:ring-2 focus:ring-popPink bg-white bg-opacity-80"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-popPink text-white py-3 px-6 rounded-xl hover:bg-dustyMagenta transition-all shadow-sm"
      >
        Update Stats 🚀
      </button>
    </form>
  );
};

export default ProgressForm;

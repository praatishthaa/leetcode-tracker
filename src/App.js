import { useState } from "react";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import ProgressForm from "./components/ProgressForm";
import PieChartComponent from "./components/PieChart";
import GirlbossQuote from "./components/GirlbossQuote";
import CodeyCat from "./components/CodeyCat";
import BugsyCat from "./components/BugsyCat";
import bgImg from "./assets/back.png";

function App() {
  const [data, setData] = useState(null);

  const handleUpdate = ({ today, total, target }) => {
    const todayDate = new Date();
    const targetDate = new Date("2026-01-01");
    const daysLeft = Math.ceil((targetDate - todayDate) / (1000 * 60 * 60 * 24));
    const remaining = Math.max(0, target - total);
    const perDay = daysLeft > 0 ? (remaining / daysLeft).toFixed(2) : 0;

    setData({ today, total, remaining, daysLeft, perDay, target });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <MainLayout>
        <Header />
        <ProgressForm onUpdate={handleUpdate} />

        {data && (
          <>
            <div className="bg-blush border border-dustyMagenta rounded-2xl p-6 shadow-md text-black space-y-2">
              <h2 className="text-xl font-semibold text-popPink">Your Stats 📊</h2>
              <p>💖 Problems Solved Today: {data.today}</p>
              <p>🧠 Total Solved: {data.total}</p>
              <p>⏳ Days Left: {data.daysLeft}</p>
              <p>🎯 Remaining to 550: {data.remaining}</p>
              <p>🔥 Problems/day needed: <b>{data.perDay}</b></p>
            </div>

            <PieChartComponent solved={data.total} remaining={data.remaining} />
            <GirlbossQuote />
          </>
        )}
      </MainLayout>

      <CodeyCat />
      <BugsyCat />
    </div>
  );
}

export default App;

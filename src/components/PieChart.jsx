import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#F65BE3", "#BC69AA"]; // Solved, Remaining

const PieChartComponent = ({ solved, remaining }) => {
  const data = [
    { name: "Solved", value: solved },
    { name: "Remaining", value: remaining },
  ];

  return (
    <div className="mt-10 bg-blush border border-dustyMagenta bg-opacity-30 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md text">
      <h2 className="text-xl text-black font-semibold  mb-4 tracking-wide">
        
        Your Progress  🍰
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
              />
            ))}
          </Pie>
          <Tooltip
            wrapperStyle={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#4C1A57",
            }}
            contentStyle={{
              backgroundColor: "#fff",
              borderColor: "#BC69AA",
              borderRadius: "10px",
              fontFamily: "Inter, sans-serif",
            }}
          />
          <Legend
            iconType="circle"
            formatter={(value) => (
              <span
                style={{
                  color: "#4C1A57",
                  fontWeight: "500",
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

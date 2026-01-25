import React from "react";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyContributionCard({ data }) {
  // 2. Transform the data to include the 'total' key
  const chartData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      total: item.commits + item.prs + item.issues, // Summing the keys here
    }));
  }, [data]);

  if (!data || data.length === 0) {
    return <div className="p-8 text-Gray600">No data available</div>;
  }

  return (
    <div className="w-full max-w-4xl bg-white border-2 border-Gray200 rounded-2xl p-8 lg:shadow-sm font-sans">
      <h2 className="text-xl font-medium text-text-secondary mb-12">
        Monthly Contributions
      </h2>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData} // 3. Use the new transformed data
            margin={{ top: 0, right: 10, left: -20, bottom: 0 }}
            //to remove the default focus border that appear because of the browser
            accessibilityLayer={false}
            style={{ outline: "none" }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-SBar)"
                  stopOpacity={1}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-EBar)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
              accessibilityLayer={false}
              style={{ outline: "none" }}
            />

            <XAxis
              dataKey="name"
              axisLine={{ stroke: "var(--color-Gray600)" }}
              tickLine={false}
              tick={{ fill: "var(--color-Gray600)", fontSize: 13 }}
              dy={10}
            />

            <YAxis
              domain={[0, "auto"]} // Changed to auto so it fits the new larger totals
              axisLine={{ stroke: "var(--color-Gray600)" }}
              tickLine={false}
              tick={{ fill: "var(--color-Gray600)", fontSize: 13 }}
            />

            <Tooltip
              cursor={{
                fill: "color-mix(in srgb, var(--color-Teal400), transparent 95%)",
              }}
              contentStyle={{
                backgroundColor: "var(--color-background)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            <Bar
              dataKey="total"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              barSize={60}
              accessibilityLayer={false}
              style={{ outline: "none" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

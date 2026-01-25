import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function ContributionActivityCard({ data }) {
  return (
    <div className="w-full p-6 bg-white border-2 border-Gray200 rounded-xl lg:shadow-sm">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-Gray600">
          Contribution Activity
        </h2>
      </div>

      {/* Chart Container */}
      <div className="h-[350px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
            //to remove the default focus border that appear because of the browser
            accessibilityLayer={false}
            style={{ outline: "none" }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
              stroke="var(--color-Slate400)"
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "var(--color-textdark)" }}
              tickLine={false}
              tick={{ fill: "var(--color-textdark)", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              domain={[0, 320]}
              ticks={[0, 80, 160, 240, 320]}
              axisLine={{ stroke: "var(--color-textdark)" }}
              tickLine={false}
              tick={{ fill: "var(--color-textdark)", fontSize: 12 }}
            />

            {/* Tooltip styled with Tailwind-like colors */}
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-background)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              formatter={(value) => (
                <span className="text-Gray600 pr-7">{value}</span>
              )}
              wrapperStyle={{
                paddingTop: "40px",
                fontSize: "14px",
                color: "var(--color-background)",
              }}
            />

            {/* Commits Line - Blue */}
            <Line
              name="Commits"
              type="monotone"
              dataKey="commits"
              stroke="var(--color-Cyan400)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "var(--color-Cyan400)",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />

            {/* Pull Requests Line - Purple */}
            <Line
              name="Pull Requests"
              type="monotone"
              dataKey="prs"
              stroke="var(--color-Purple400)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "var(--color-Purple400)",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />

            {/* Issues Line - Green */}
            <Line
              name="Issues"
              type="monotone"
              dataKey="issues"
              stroke="var(--color-Teal400)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "var(--color-Teal400)",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

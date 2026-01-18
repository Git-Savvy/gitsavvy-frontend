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
    <div className="w-full  p-6 bg-white border-2 border-gray-200 rounded-xl lg:shadow-sm">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-gray-900">
          Contribution Activity
        </h2>
      </div>

      {/* Chart Container */}
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            //to remove the default focus border that appear because of the browser
            accessibilityLayer={false}
            style={{ outline: "none" }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              domain={[0, 320]}
              ticks={[0, 80, 160, 240, 320]}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            {/* Tooltip styled with Tailwind-like colors */}
            <Tooltip
              contentStyle={{
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
                <span className="text-slate-600 pr-7">{value}</span>
              )}
              wrapperStyle={{
                paddingTop: "40px",
                fontSize: "14px",
                color: "#475569",
              }}
            />

            {/* Commits Line - Blue */}
            <Line
              name="Commits"
              type="monotone"
              dataKey="commits"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fff", stroke: "#3b82f6", strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />

            {/* Pull Requests Line - Purple */}
            <Line
              name="Pull Requests"
              type="monotone"
              dataKey="prs"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fff", stroke: "#8b5cf6", strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />

            {/* Issues Line - Green */}
            <Line
              name="Issues"
              type="monotone"
              dataKey="issues"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fff", stroke: "#10b981", strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

"use client";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export default function ClickChart({ data }: any) {
  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Line type="monotone" dataKey="clicks" />
    </LineChart>
  );
}
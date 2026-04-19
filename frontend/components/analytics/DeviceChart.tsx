import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default function DeviceChart({ data }: any) {
  return (
    <BarChart width={400} height={200} data={data}>
      <XAxis dataKey="device" />
      <YAxis />
      <Bar dataKey="count" />
    </BarChart>
  );
}
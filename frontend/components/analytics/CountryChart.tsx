import { PieChart, Pie } from "recharts";

export default function CountryChart({ data }: any) {
  return (
    <PieChart width={400} height={200}>
      <Pie data={data} dataKey="value" nameKey="country" />
    </PieChart>
  );
}
export default function StatsCard({ title, value }: any) {
  return (
    <div className="p-4 shadow rounded">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
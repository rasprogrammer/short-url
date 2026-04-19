export default function Card({ children }: any) {
  return (
    <div className="shadow p-4 rounded bg-white">
      {children}
    </div>
  );
}
export default function DomainList({ domains }: any) {
  return (
    <div>
      {domains.map((d: any) => (
        <div key={d.id}>
          {d.domain} - {d.verified ? "Verified" : "Pending"}
        </div>
      ))}
    </div>
  );
}
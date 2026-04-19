export default function ApiKeyList({ keys }: any) {
  return (
    <div>
      {keys.map((k: any) => (
        <div key={k.id}>
          {k.key}
        </div>
      ))}
    </div>
  );
}
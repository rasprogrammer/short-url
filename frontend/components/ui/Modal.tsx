export default function Modal({ open, onClose, children }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
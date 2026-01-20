export default function FlashCard({ title, children }) {
  return (
    <div className="flash-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

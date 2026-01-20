export default function InterestedButton({
  children,
  onClick,
  wrapperStyle,
  buttonStyle,
}) {
  return (
    <div className="btn-wrapper" style={wrapperStyle}>
      <button className="interested-btn" onClick={onClick} style={buttonStyle}>
        <span>{children}</span>
      </button>
    </div>
  );
}

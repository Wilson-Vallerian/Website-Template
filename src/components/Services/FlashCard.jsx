import * as Icon from "react-icons/fa";

export default function FlashCard({ title, children, icon }) {
  const IconComponent = Icon[icon];
  return (
    <div className="flash-card">
      {IconComponent && (
        <div className="flash-card__icon">
          <IconComponent size={32} />
        </div>
      )}
      <h3>{title}</h3>
      <div className="flash-card__underline" />

      <p>{children}</p>
    </div>
  );
}

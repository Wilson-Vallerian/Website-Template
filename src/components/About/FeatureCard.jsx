import * as Icons from "react-icons/fa";

export default function FeatureCard({ title, text, icon }) {
  const IconComponent = Icons[icon];
  return (
    <fieldset>
      <legend>
        <div className="feature-card__icon-wrapper">
          {IconComponent && (
            <div className="feature-card__icon">
              <IconComponent size={25} />
            </div>
          )}
        </div>
      </legend>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{text}</p>
    </fieldset>
  );
}

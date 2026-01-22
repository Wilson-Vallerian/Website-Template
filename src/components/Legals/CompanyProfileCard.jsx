import * as Icons from "react-icons/fa";

export default function CompanyProfileCard({ data }) {
  return (
    <div className="company-profile-wrapper">
      <div className="company-profile-card">
        <div className="left">
          <h2>Template</h2>
          <h3>Wilson Vallerian Wong</h3>
        </div>

        <div className="center" />

        <div className="right">
          {data.map((el) => {
            const IconComponent = Icons[el.icon];
            return (
              <div className="key-value" key={`Company-ID-${el.value}`}>
                <div className="label">
                  <div className="icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  {el.label}
                </div>
                <div className="value">{el.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

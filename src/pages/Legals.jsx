import SectionHeader from "../components/SectionHeader";
import { legals, companyInfo } from "../assets/data/legals";
import "../styles/body/legals.css";
import IdentificationGroup from "../components/Legals/IdentificationGroup";
import CompanyProfileCard from "../components/Legals/CompanyProfileCard";

export default function Legals() {
  return (
    <>
      <div>
        <SectionHeader
          title="Legal information"
          paragraphs={[
            "Our company is legally registered and operates in accordance with all applicable regulations.",
            "All legal documents are regularly reviewed and updated.",
          ]}
        />
        <CompanyProfileCard data={companyInfo} />
      </div>

      <div className="even-section" style={{ padding: "1rem" }}>
        <SectionHeader
          title="License & Certification Information"
          paragraphs={[
            "We hold the necessary licenses and certifications required to operate our business.",
            "These credentials are issued by relevant authorities and are regularly reviewed to ensure continued compliance with industry standards.",
          ]}
        />

        <IdentificationGroup data={legals} />
      </div>
    </>
  );
}

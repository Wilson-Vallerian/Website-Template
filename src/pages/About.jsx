import FeatureCard from "../components/About/FeatureCard";
import ImageWithText from "../components/About/ImageWithText";
import SectionHeader from "../components/SectionHeader";
import whyChooseUs from "../assets/data/whyChooseUs.js";
import "../styles/body/about.css";

export default function About() {
  return (
    <>
      <SectionHeader
        title="About Us"
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          "Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        ]}
      />

      <ImageWithText
        imgLeft={true}
        img="https://placehold.co/600x400"
        alt="About us"
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit quisque faucibus ex sapien vitae pellentesque sem. Sem placerat in id cursus mi pretium tellus. Tellus duis convallis tempus leo eu aenean sed. Sed diam urna tempor pulvinar vivamus fringilla lacus. Lacus nec metus bibendum egestas iaculis massa nisl. Nisl malesuada lacinia integer nunc posuere ut hendrerit.",
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit quisque faucibus ex sapien vitae pellentesque sem. Sem placerat in id cursus mi pretium tellus. Tellus duis convallis tempus leo eu aenean sed. Sed diam urna tempor pulvinar vivamus fringilla lacus. Lacus nec metus bibendum egestas iaculis massa nisl. Nisl malesuada lacinia integer nunc posuere ut hendrerit.",
        ]}
      />

      <div className="even-section">
        <SectionHeader
          title="Why Choose Us"
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            "Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscingelit quisque faucibus ex sapien vitae pellentesque.",
          ]}
        />

        <div className="feature-card">
          <div className="feature-card-row">
            {whyChooseUs.map((reason, i) => {
              return (
                <FeatureCard
                  key={`about-${i}-${reason.title}`}
                  title={reason.title}
                  text={reason.text}
                  icon={reason.icon}
                />
              );
            })}
          </div>
        </div>

        <br />
      </div>
    </>
  );
}

import FlashCard from "./FlashCard";

export default function Carousel({ data }) {
  return (
    <div className="services">
      <div className="carousel">
        <div className="carousel-group">
          {[...data].map((service, index) => (
            <FlashCard key={`carousel1-${index}`} title={service.title}>
              {service.description}
            </FlashCard>
          ))}
        </div>
      </div>
    </div>
  );
}

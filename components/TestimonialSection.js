import TestimonialCarousel from "./TestimonialCarousel";

export default function TestimonialSection() {
  return (
    <section className="testimonial section-margin">
      <div className="container">
        <div className="section-intro">
          <h4 className="section-intro__title">OUR Testimonial</h4>
          <h2 className="section-intro__subtitle bottom-border">
            What People Say About Us
          </h2>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

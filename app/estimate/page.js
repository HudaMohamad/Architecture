import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata = { title: "Project Estimate" };

const steps = [
  {
    title: "1. Tell us about your project",
    text: "Share the type of space, its size, your location, and roughly when you would like to start.",
  },
  {
    title: "2. We review the details",
    text: "Our team studies your requirements and prepares a clear scope with realistic timelines.",
  },
  {
    title: "3. You receive a transparent estimate",
    text: "A detailed breakdown of design, materials, and build costs — no hidden surprises.",
  },
];

export default function EstimatePage() {
  return (
    <>
      <PageBanner title="Get a Project Estimate" crumb="Estimate" />

      <section className="about section-margin mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-intro">
                <h4 className="section-intro__title left-border">
                  Plan with Confidence
                </h4>
                <h2 className="section-intro__subtitle small">
                  Know Your Project Estimate
                </h2>
              </div>
              <p>
                Every great build starts with a clear plan and an honest number.
                Our estimate helps you understand what your project will take —
                from first concept to final handover — before any commitment.
              </p>
              <p>
                Tell us what you have in mind and we will turn it into a
                transparent, itemized estimate you can actually plan around.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {steps.map((s, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="section-intro">
                  <h4 className="section-intro__title left-border">
                    {s.title}
                  </h4>
                </div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-lg-8">
              <h2 className="section-intro__subtitle small">
                Request Your Estimate
              </h2>
              <form className="form-subscribe mt-3">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--leftBorder btn--rightBorder">
                  Request Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

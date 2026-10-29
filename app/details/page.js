import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata = { title: "About our Company" };

export default function DetailsPage() {
  return (
    <>
      <PageBanner title="About our Company" crumb="About" />

      <section className="about section-margin mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about__img text-center text-md-left mb-5 mb-md-0">
                <img className="img-fluid" src="/img/about.png" alt="About our Company" />
              </div>
            </div>
            <div className="col-md-6 pl-xl-5">
              <div className="section-intro">
                <h4 className="section-intro__title left-border">
                  Who We Are
                </h4>
                <h2 className="section-intro__subtitle small">
                  We&apos;ve been creating Awesome Since 1992
                </h2>
              </div>
              <p>
                We are a studio of architects and designers who believe great
                spaces come from careful listening, honest materials, and a
                respect for how people actually live and work.
              </p>
              <p>
                Over three decades we have delivered homes, villas, and
                workplaces that balance bold ideas with everyday comfort — each
                one designed around light, flow, and a strong sense of place.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h2 className="section-intro__subtitle small">
                How We Work
              </h2>
              <p>
                Every project starts with the people who will use it. We shape
                each design around their routines, their site, and their
                budget, then refine it until the architecture feels effortless.
              </p>
              <p>
                From first sketch to final handover, our team stays close to the
                details — because the small decisions are what turn a building
                into a place people love to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

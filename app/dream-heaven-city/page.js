import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata = { title: "Dream Heaven City" };

export default function DreamHeavenCityPage() {
  return (
    <>
      <PageBanner title="Dream Heaven City" crumb="Dream Heaven City" />

      <section className="about section-margin mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about__img text-center text-md-left mb-5 mb-md-0">
                <img className="img-fluid" src="/img/hero-1.png" alt="Dream Heaven City" />
              </div>
            </div>
            <div className="col-md-6 pl-xl-5">
              <div className="section-intro">
                <h4 className="section-intro__title left-border">
                  A Place to Call Home
                </h4>
                <h2 className="section-intro__subtitle small">
                  Dream Heaven City
                </h2>
              </div>
              <p>
                Dream Heaven City is more than a development — it is a complete
                way of living. Designed around open green spaces, natural light,
                and quiet streets, it brings together modern homes and everyday
                comfort in one carefully planned community.
              </p>
              <p>
                Every residence is built to breathe: generous windows, calm
                interiors, and views that stretch across landscaped gardens.
                Here, architecture and nature work together to create a place
                that truly feels like heaven.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h2 className="section-intro__subtitle small">
                Life in the City
              </h2>
              <p>
                Wide walkways, shaded courtyards, and community spaces put
                everything you need within reach. Morning walks, evening
                gatherings, and quiet weekends all find their place in a city
                shaped around the people who live in it.
              </p>
              <p>
                From the first sketch to the final handover, Dream Heaven City
                was designed to grow with you — a home today, and a place your
                family will love for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

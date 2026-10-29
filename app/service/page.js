import PageBanner from "@/components/PageBanner";
import Tips from "@/components/Tips";
import Footer from "@/components/Footer";

export const metadata = { title: "Service" };

const services = [
  "ti-package",
  "ti-home",
  "ti-brush-alt",
  "ti-package",
  "ti-home",
  "ti-brush-alt",
];

export default function ServicePage() {
  return (
    <>
      <PageBanner title="Our Services" crumb="Services" />

      <section className="service section-margin mb-5 pb-5">
        <div className="container">
          <div className="section-intro">
            <h4 className="section-intro__title">OUR Services</h4>
            <h2 className="section-intro__subtitle bottom-border">
              Our Offered Services
            </h2>
          </div>

          <div className="row">
            {services.map((icon, i) => (
              <div key={i} className="col-sm-6 col-lg-4">
                <div className="media service__single">
                  <span className="service__singleIcon">
                    <i className={icon}></i>
                  </span>
                  <div className="media-body">
                    <h3>Total Architecture</h3>
                    <p>
                      If you are looking at blank cassettes on the web lorem
                      ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Tips />
      <Footer />
    </>
  );
}

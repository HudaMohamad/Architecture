import PageBanner from "@/components/PageBanner";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact" />

      <section className="section-margin">
        <div className="container">
          <ContactMap />

          <div className="row align-items-center">
            <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="lnr lnr-home"></i>
                </span>
                <div className="media-body">
                  <h3>California United States</h3>
                  <p>Santa monica bullevard</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="lnr lnr-phone-handset"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a href="tel:454545654">00 (440) 9865 562</a>
                  </h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="lnr lnr-envelope"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a href="mailto:hello@example.com">
                      hello@example.com
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-9">
              <form action="#/" className="form-contact">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="form-group">
                      <textarea
                        className="form-control different-control w-100"
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="6"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center text-md-right">
                  <button type="submit" className="btn active btn--leftBorder">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

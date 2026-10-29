import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-center text-sm-left">
            <h3 className="footer__title">Top Products</h3>
            <ul className="footer__link">
              <li><Link href="/info/managed-website">managed Website</Link></li>
              <li><Link href="/info/manage-reputation">Manage Reputation</Link></li>
              <li><Link href="/info/power-tools">power Tools</Link></li>
              <li><Link href="/info/marketing-service">Marketing Service</Link></li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-center text-sm-left">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__link">
              <li><Link href="/info/jobs">Jobs</Link></li>
              <li><Link href="/info/brand-assets">Brand Assets</Link></li>
              <li><Link href="/info/investor-relations">Investor Relations</Link></li>
              <li><Link href="/info/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-center text-sm-left">
            <h3 className="footer__title">Features</h3>
            <ul className="footer__link">
              <li><Link href="/info/jobs">Jobs</Link></li>
              <li><Link href="/info/brand-assets">Brand Assets</Link></li>
              <li><Link href="/info/investor-relations">Investor Relations</Link></li>
              <li><Link href="/info/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-center text-sm-left">
            <h3 className="footer__title">Resources</h3>
            <ul className="footer__link">
              <li><Link href="/info/guides">Guides</Link></li>
              <li><Link href="/info/research">Research</Link></li>
              <li><Link href="/info/experts">Experts</Link></li>
              <li><Link href="/info/agencies">Agencies</Link></li>
            </ul>
          </div>
          <div className="col-sm-8 col-lg-4 mb-4 mb-lg-0 text-center text-sm-left">
            <h3 className="footer__title">Newsletter</h3>
            <p>You can trust us. we only send promo offers,</p>
            <form action="" className="form-subscribe">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  required
                />
                <div className="input-group-append">
                  <button className="btn-append" type="submit">
                    <i className="lnr lnr-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-sm-flex justify-content-between footer__bottom top-border">
          <p>
            Copyright &copy;{new Date().getFullYear()} Sparsh Architecture. All
            rights reserved.
          </p>
          <ul className="social-icons mt-2 mt-sm-0">
            <li><a href="#/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#/"><i className="fab fa-dribbble"></i></a></li>
            <li><a href="#/"><i className="fab fa-behance"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

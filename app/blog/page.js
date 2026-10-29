import { asset } from "@/lib/asset";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import BlogSidebar from "@/components/BlogSidebar";
import Footer from "@/components/Footer";

export const metadata = { title: "Blog" };

const posts = [
  { img: asset("/img/blog/feature-img1.jpg"), title: "Astronomy Binoculars A Great Alternative" },
  { img: asset("/img/blog/feature-img2.jpg"), title: "The Basics Of Buying A Telescope" },
  { img: asset("/img/blog/feature-img3.jpg"), title: "The Glossary Of Telescopes" },
  { img: asset("/img/blog/feature-img4.jpg"), title: "The Night Sky" },
  { img: asset("/img/blog/feature-img5.jpg"), title: "Telescopes 101" },
];

function Meta() {
  return (
    <div className="col-lg-3 col-md-3 meta-details">
      <ul className="tags">
        <li><a href="#">Food,</a></li>
        <li><a href="#">Technology,</a></li>
        <li><a href="#">Politics,</a></li>
        <li><a href="#">Lifestyle</a></li>
      </ul>
      <div className="user-details row">
        <p className="user-name col-lg-12 col-md-12 col-6">
          <a href="#">Jordan Avery</a> <span className="lnr lnr-user"></span>
        </p>
        <p className="date col-lg-12 col-md-12 col-6">
          <a href="#">12 Dec, 2017</a>{" "}
          <span className="lnr lnr-calendar-full"></span>
        </p>
        <p className="view col-lg-12 col-md-12 col-6">
          <a href="#">1.2M Views</a> <span className="lnr lnr-eye"></span>
        </p>
        <p className="comments col-lg-12 col-md-12 col-6">
          <a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span>
        </p>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog Home" crumb="Blog" />

      <section className="post-content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              {posts.map((p, i) => (
                <div key={i} className="single-post row">
                  <Meta />
                  <div className="col-lg-9 col-md-9">
                    <div className="feature-img">
                      <img className="img-fluid" src={p.img} alt="" />
                    </div>
                    <Link className="posts-title" href="/blog-single">
                      <h3>{p.title}</h3>
                    </Link>
                    <p className="excert">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction.
                    </p>
                    <Link href="/blog-single" className="primary-btn">
                      View More
                    </Link>
                  </div>
                </div>
              ))}

              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <span className="lnr lnr-chevron-left"></span>
                      </span>
                    </a>
                  </li>
                  <li className="page-item"><a href="#" className="page-link">01</a></li>
                  <li className="page-item active"><a href="#" className="page-link">02</a></li>
                  <li className="page-item"><a href="#" className="page-link">03</a></li>
                  <li className="page-item"><a href="#" className="page-link">04</a></li>
                  <li className="page-item"><a href="#" className="page-link">09</a></li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <span className="lnr lnr-chevron-right"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

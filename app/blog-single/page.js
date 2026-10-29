import PageBanner from "@/components/PageBanner";
import BlogSidebar from "@/components/BlogSidebar";
import Footer from "@/components/Footer";

export const metadata = { title: "Blog Details" };

const comments = [
  { img: "/img/blog/c1.jpg", name: "Emily Brooks", pad: false },
  { img: "/img/blog/c2.jpg", name: "Elsie Cunningham", pad: true },
  { img: "/img/blog/c3.jpg", name: "Annie Stephens", pad: true },
  { img: "/img/blog/c4.jpg", name: "Maria Luna", pad: false },
  { img: "/img/blog/c5.jpg", name: "Ina Hayes", pad: false },
];

export default function BlogSinglePage() {
  return (
    <>
      <PageBanner title="Blog Details" crumb="Blog Details" />

      <section className="post-content-area single-post-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="/img/blog/feature-img1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 meta-details">
                  <ul className="tags">
                    <li><a href="#">Food,</a></li>
                    <li><a href="#">Technology,</a></li>
                    <li><a href="#">Politics,</a></li>
                    <li><a href="#">Lifestyle</a></li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Jordan Avery</a>{" "}
                      <span className="lnr lnr-user"></span>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a>{" "}
                      <span className="lnr lnr-calendar-full"></span>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a>{" "}
                      <span className="lnr lnr-eye"></span>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a>{" "}
                      <span className="lnr lnr-bubble"></span>
                    </p>
                    <ul className="social-links col-lg-12 col-md-12 col-6">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-github"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <h3 className="mt-20 mb-20 text-white">
                    Astronomy Binoculars A Great Alternative
                  </h3>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually sit through a
                    self-imposed
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually sit through a
                    self-imposed
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="quotes">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </div>
                  <div className="row mt-30 mb-30">
                    <div className="col-6">
                      <img className="img-fluid" src="/img/blog/post-img1.jpg" alt="" />
                    </div>
                    <div className="col-6">
                      <img className="img-fluid" src="/img/blog/post-img2.jpg" alt="" />
                    </div>
                    <div className="col-lg-12 mt-30">
                      <p>
                        MCSE boot camps have its supporters and its detractors.
                        Some people do not understand why you should have to
                        spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price.
                        However, who has the willpower.
                      </p>
                      <p>
                        MCSE boot camps have its supporters and its detractors.
                        Some people do not understand why you should have to
                        spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price.
                        However, who has the willpower.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="navigation-area">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                    <div className="thumb">
                      <a href="#"><img className="img-fluid" src="/img/blog/prev.jpg" alt="" /></a>
                    </div>
                    <div className="arrow">
                      <a href="#"><span className="lnr text-white lnr-arrow-left"></span></a>
                    </div>
                    <div className="detials">
                      <p className="mb-0">Prev Post</p>
                      <a href="#"><h4 className="text-white">Space The Final Frontier</h4></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                    <div className="detials">
                      <p className="mb-0">Next Post</p>
                      <a href="#"><h4 className="text-white">Telescopes 101</h4></a>
                    </div>
                    <div className="arrow">
                      <a href="#"><span className="lnr text-white lnr-arrow-right"></span></a>
                    </div>
                    <div className="thumb">
                      <a href="#"><img className="img-fluid" src="/img/blog/next.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comments-area">
                <h4 className="text-white">05 Comments</h4>
                {comments.map((c, i) => (
                  <div
                    key={i}
                    className={`comment-list${c.pad ? " left-padding" : ""}`}
                  >
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src={c.img} alt="" />
                        </div>
                        <div className="desc">
                          <h5><a href="#">{c.name}</a></h5>
                          <p className="date">December 4, 2017 at 3:12 pm </p>
                          <p className="comment">
                            Never say goodbye till the end comes!
                          </p>
                        </div>
                      </div>
                      <div className="reply-btn">
                        <a href="#" className="btn-reply text-uppercase">
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="comment-form">
                <h4 className="text-white">Leave a Comment</h4>
                <form>
                  <div className="form-group form-inline">
                    <div className="form-group col-lg-6 col-md-12 name">
                      <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group col-lg-6 col-md-12 email">
                      <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control mb-10"
                      rows="5"
                      name="message"
                      placeholder="Messege"
                      required
                    ></textarea>
                  </div>
                  <a href="#" className="primary-btn">
                    Post Comment
                  </a>
                </form>
              </div>
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

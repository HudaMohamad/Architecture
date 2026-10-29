import Link from "next/link";

const popular = [
  { img: "/img/blog/pp1.jpg", title: "Space The Final Frontier" },
  { img: "/img/blog/pp2.jpg", title: "The Amazing Hubble" },
  { img: "/img/blog/pp3.jpg", title: "Astronomy Or Astrology" },
  { img: "/img/blog/pp4.jpg", title: "Asteroids telescope" },
];

const categories = [
  ["Technology", "37"],
  ["Lifestyle", "24"],
  ["Fashion", "59"],
  ["Art", "29"],
  ["Food", "15"],
  ["Architecture", "09"],
  ["Adventure", "44"],
];

const tags = [
  "Technology", "Fashion", "Architecture", "Fashion", "Food", "Technology",
  "Lifestyle", "Art", "Adventure", "Food", "Lifestyle", "Adventure",
];

export default function BlogSidebar() {
  return (
    <div className="col-lg-4 sidebar-widgets">
      <div className="widget-wrap">
        <div className="single-sidebar-widget search-widget">
          <form className="search-form" action="#">
            <input placeholder="Search Posts" name="search" type="text" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="single-sidebar-widget user-info-widget">
          <img src="/img/blog/user-info.png" alt="" />
          <a href="#">
            <h4>Charlie Barber</h4>
          </a>
          <p>Senior blog writer</p>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-behance"></i></a></li>
          </ul>
          <p>
            Boot camps have its supporters andit sdetractors. Some people do not
            understand why you should have to spend money on boot camp when you
            can get. Boot camps have itssuppor ters andits detractors.
          </p>
        </div>

        <div className="single-sidebar-widget popular-post-widget">
          <h4 className="popular-title">Popular Posts</h4>
          <div className="popular-post-list">
            {popular.map((p, i) => (
              <div
                key={i}
                className="single-post-list d-flex flex-row align-items-center"
              >
                <div className="thumb">
                  <img className="img-fluid" src={p.img} alt="" />
                </div>
                <div className="details">
                  <Link href="/blog-single">
                    <h6>{p.title}</h6>
                  </Link>
                  <p>02 Hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="single-sidebar-widget post-category-widget">
          <h4 className="category-title">Post Catgories</h4>
          <ul className="cat-list">
            {categories.map(([name, count]) => (
              <li key={name}>
                <a href="#" className="d-flex justify-content-between">
                  <p>{name}</p>
                  <p>{count}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="single-sidebar-widget newsletter-widget">
          <h4 className="newsletter-title">Newsletter</h4>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
          <div className="form-group d-flex flex-row">
            <div className="col-autos">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <a href="#" className="bbtns">
              Subcribe
            </a>
          </div>
          <p className="text-bottom">You can unsubscribe at any time</p>
        </div>

        <div className="single-sidebar-widget tag-cloud-widget">
          <h4 className="tagcloud-title">Tag Clouds</h4>
          <ul>
            {tags.map((t, i) => (
              <li key={i}>
                <a href="#">{t}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

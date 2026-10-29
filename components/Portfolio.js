import Link from "next/link";
import { projects } from "@/lib/projects";

function Text({ slug, date, name, overview }) {
  return (
    <>
      <h4 className="section-intro__title left-border">{date}</h4>
      <h2 className="section-intro__subtitle small">{name}</h2>
      <p>{overview}</p>
      <Link className="btn btn--rightBorder mt-3" href={`/projects/${slug}`}>
        Read More
      </Link>
    </>
  );
}

export default function Portfolio() {
  return (
    <section className="portfolio section-margin">
      <div className="container">
        <div className="section-intro">
          <h4 className="section-intro__title">OUR PORTFOLIO</h4>
          <h2 className="section-intro__subtitle bottom-border">
            Latest Completed Projects
          </h2>
        </div>

        {projects.map((p) =>
          p.reversed ? (
            <div key={p.slug} className="row align-items-end pb-md-5 mb-4">
              <div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
                <Text slug={p.slug} date={p.date} name={p.name} overview={p.overview} />
              </div>
              <div className="col-md-7 mb-4 mb-md-0 order-1 order-md-2">
                <div className="portfolio__img">
                  <img className="img-fluid" src={p.img} alt={p.name} />
                </div>
              </div>
            </div>
          ) : (
            <div key={p.slug} className="row align-items-end pb-md-5 mb-4">
              <div className="col-md-7 mb-4 mb-md-0">
                <div className="portfolio__img">
                  <img className="img-fluid" src={p.img} alt={p.name} />
                </div>
              </div>
              <div className="col-md-5 mb-5 pl-xl-5">
                <Text slug={p.slug} date={p.date} name={p.name} overview={p.overview} />
              </div>
            </div>
          )
        )}

        <div className="text-center pt-2">
          <button className="btn btn--rightBorder btn--leftBorder">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

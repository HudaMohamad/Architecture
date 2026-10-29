import Link from "next/link";

export default function Tips() {
  return (
    <section className="tips tips-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="section-intro__subtitle">
              Get to Know Project Estimate?
            </h2>
            <p>
              There is a moment in the life of any aspiring astronomer that it is
              time to buy that first telescope. It&apos;s exciting to think about
              setting up your own viewing station whether that is on the deck
            </p>
          </div>
          <div className="col-lg-5 text-center text-lg-right">
            <Link className="btn btn-dark btn--leftBorder btn--rightBorder" href="/estimate">
              Get Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

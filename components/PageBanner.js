import Link from "next/link";

/**
 * The inner-page hero banner with a title and breadcrumb.
 * Mirrors <header class="hero-banner project-bg"> from the original template.
 */
export default function PageBanner({ title, crumb }) {
  return (
    <header className="hero-banner project-bg">
      <Link className="navbar-brand" href="/">
        <img src="/img/logo.png" alt="" />
      </Link>
      <div className="container">
        <h2 className="section-intro__subtitle">{title}</h2>
        <div className="btn-group breadcrumb">
          <Link href="/" className="btn">
            Home
          </Link>
          <span className="btn btn--rightBorder">{crumb}</span>
        </div>
      </div>
    </header>
  );
}

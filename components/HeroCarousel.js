import { asset } from "@/lib/asset";
import Link from "next/link";

export default function HeroCarousel() {
  return (
    <div className="owl-carousel owl-theme heroCarousel">
      <div className="hero__viewport">
        <div className="item hero__slide is-active">
          <img src={asset("/img/hero-1.png")} alt="Dream Heaven City" />
          <div className="hero__slideContent text-center">
            <h1>Dream Heaven City</h1>
            <p>
              A modern community built around open green spaces, natural light,
              and homes designed for the way you really live.
            </p>
            <Link
              className="btn btn--leftBorder btn--rightBorder"
              href="/dream-heaven-city"
            >
              Details
            </Link>
            <span className="hero__slideContent--right"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

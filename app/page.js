import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import Overview from "@/components/Overview";
import Portfolio from "@/components/Portfolio";
import Tips from "@/components/Tips";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export const metadata = { title: "Sparsh Architecture" };

export default function Home() {
  return (
    <>
      <header>
        <div className="hero">
          <Link className="navbar-brand" href="/">
            <img src="/img/logo.png" alt="" />
          </Link>
          <HeroCarousel />
        </div>
      </header>

      <AboutSection />
      <Overview />
      <Portfolio />
      <Tips />
      <TestimonialSection />
      <Footer />
    </>
  );
}

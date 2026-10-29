import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection";
import Overview from "@/components/Overview";
import Tips from "@/components/Tips";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="About" />
      <AboutSection />
      <Overview className="section-margin mt-0" />
      <Tips />
      <TestimonialSection />
      <Footer />
    </>
  );
}

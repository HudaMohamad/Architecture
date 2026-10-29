import PageBanner from "@/components/PageBanner";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageBanner title="Our Projects" crumb="Projects" />
      <Portfolio />
      <Footer />
    </>
  );
}

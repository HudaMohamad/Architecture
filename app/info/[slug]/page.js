import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

/**
 * Demo content for the footer links. This is placeholder portfolio copy —
 * intentionally generic. Nothing here is a real policy, privacy notice, or
 * legally binding terms document.
 */
const pages = {
  "managed-website": {
    title: "Managed Website",
    tagline: "What we do",
    intro:
      "A fully managed website service that keeps your online presence fast, secure, and always up to date.",
    points: [
      "Hosting, updates, and backups handled for you",
      "Performance tuning and uptime monitoring",
      "Ongoing design and content refreshes",
    ],
  },
  "manage-reputation": {
    title: "Manage Reputation",
    tagline: "What we do",
    intro:
      "Tools and guidance to monitor what people say about your brand and to respond with confidence.",
    points: [
      "Review and mention monitoring across the web",
      "Simple dashboards to track sentiment over time",
      "Response templates that keep your tone consistent",
    ],
  },
  "power-tools": {
    title: "Power Tools",
    tagline: "What we do",
    intro:
      "A set of productivity tools built to help teams design, plan, and deliver projects faster.",
    points: [
      "Reusable templates and project blueprints",
      "Collaboration features for distributed teams",
      "Automation that removes repetitive busywork",
    ],
  },
  "marketing-service": {
    title: "Marketing Service",
    tagline: "What we do",
    intro:
      "End-to-end marketing support that turns great design work into measurable growth.",
    points: [
      "Campaign planning and creative direction",
      "Content, social, and email execution",
      "Clear reporting on what actually moves the needle",
    ],
  },
  jobs: {
    title: "Jobs",
    tagline: "Join the team",
    intro:
      "We are always interested in meeting talented designers, architects, and builders.",
    points: [
      "Open, collaborative studio culture",
      "Real projects with real impact",
      "Room to learn and grow with the team",
    ],
  },
  "brand-assets": {
    title: "Brand Assets",
    tagline: "Our identity",
    intro:
      "Logos, colours, and typography that make up our visual identity, gathered in one place.",
    points: [
      "Primary and secondary logo versions",
      "Colour palette and spacing guidelines",
      "Typography and usage examples",
    ],
  },
  "investor-relations": {
    title: "Investor Relations",
    tagline: "For partners",
    intro:
      "An overview of our story, our vision, and the milestones that shape where we are headed.",
    points: [
      "Company background and mission",
      "Highlights of recent work and growth",
      "How to get in touch with the team",
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    tagline: "Good to know",
    intro:
      "This is a demo portfolio project. The content shown here is sample placeholder copy and is not a real or binding agreement.",
    points: [
      "Everything on this site is for demonstration only",
      "No real service, purchase, or obligation is offered",
      "Replace this page with your own terms before any real use",
    ],
  },
  guides: {
    title: "Guides",
    tagline: "Learn with us",
    intro:
      "Step-by-step guides that walk you through our process, from first sketch to finished build.",
    points: [
      "Getting started with a new project",
      "Working through design and revisions",
      "Preparing a project for delivery",
    ],
  },
  research: {
    title: "Research",
    tagline: "How we think",
    intro:
      "Notes and findings from our exploration of materials, methods, and modern architecture.",
    points: [
      "Studies on sustainable building materials",
      "Experiments with light and space",
      "Lessons learned from past projects",
    ],
  },
  experts: {
    title: "Experts",
    tagline: "Meet the people",
    intro:
      "A team of architects, designers, and engineers who bring every project to life.",
    points: [
      "Specialists across design and construction",
      "Years of combined experience",
      "A shared passion for thoughtful spaces",
    ],
  },
  agencies: {
    title: "Agencies",
    tagline: "Work with us",
    intro:
      "We partner with agencies and studios to deliver architecture and design work at scale.",
    points: [
      "White-label design and build support",
      "Flexible collaboration models",
      "Reliable delivery on shared deadlines",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  return { title: page ? page.title : "Not Found" };
}

export default async function InfoPage({ params }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

  return (
    <>
      <PageBanner title={page.title} crumb={page.title} />

      <section className="about section-margin mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-intro">
                <h4 className="section-intro__title left-border">
                  {page.tagline}
                </h4>
                <h2 className="section-intro__subtitle small">{page.title}</h2>
              </div>
              <p>{page.intro}</p>
              <p>
                If you are looking at blank cassettes on the web lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
              </p>
              <ul className="footer__link mt-4">
                {page.points.map((point, i) => (
                  <li key={i}>
                    <span className="section-intro__title left-border">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

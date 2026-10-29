import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? project.name : "Not Found" };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <PageBanner title={project.name} crumb={project.name} />

      <section className="about section-margin mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about__img text-center text-md-left mb-5 mb-md-0">
                <img className="img-fluid" src={project.img} alt={project.name} />
              </div>
            </div>
            <div className="col-md-6 pl-xl-5">
              <div className="section-intro">
                <h4 className="section-intro__title left-border">
                  {project.date}
                </h4>
                <h2 className="section-intro__subtitle small">
                  {project.name}
                </h2>
              </div>
              <p>{project.overview}</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h2 className="section-intro__subtitle small">
                About this Project
              </h2>
              {project.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

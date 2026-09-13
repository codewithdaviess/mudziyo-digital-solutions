import { ProjectCards } from "../components/project-cards";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({ title: "Selected Digital Work", description: "See examples of the practical business systems, websites and digital products Mudziyo designs and builds.", path: "/work" });
export default function WorkPage() {
  return (
    <>
      <section className="page-hero work-hero">
        <div className="container">
          <h1>
            <span className="work-hero-accent">Designed</span> to do
            <br />
            more than look good.
          </h1>
          <p>
            These are examples of the kinds of practical digital products and
            systems we create when a real problem deserves a better answer.
          </p>
        </div>
      </section>
      <section className="section work-page">
        <div className="container">
          <ProjectCards />
        </div>
      </section>
    </>
  );
}

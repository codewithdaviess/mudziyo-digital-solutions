import { SectionIntro } from "../components/section-intro";
import { SolutionCards } from "../components/solution-cards";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({ title: "Digital Solutions", description: "Explore Mudziyo's web development, business systems, AI automation, digital payments, products and integration services.", path: "/solutions" });

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero solutions-hero">
        <div className="container">
          <h1>
            <span className="solutions-hero-accent">Technology</span> that
            <br />
            moves work forward.
          </h1>
          <p>
            Whether you need a simple public-facing website or a complex system
            behind the scenes, we build practical, considered digital solutions
            around the work that matters.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            title="Every solution starts with a useful question."
            text="What needs to work better? Who needs it to work better? We find the simplest valuable answer, then build it properly."
          />
          <SolutionCards />
        </div>
      </section>
    </>
  );
}

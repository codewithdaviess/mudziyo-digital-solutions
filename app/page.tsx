import { ProjectCards } from "./components/project-cards";
import { ParallaxHero } from "./components/parallax-hero";
import { ApproachBanner } from "./components/approach-banner";
import { ClearPathSection } from "./components/clear-path-section";
import { NewsletterSection } from "./components/newsletter-section";
import { PricingPlans } from "./components/pricing-plans";
import { SectionIntro } from "./components/section-intro";
import { SolutionCards } from "./components/solution-cards";
import { createPageMetadata } from "./lib/seo";

export const metadata = createPageMetadata({
  title: "Web Development & Software for Businesses",
  description: "Mudziyo Digital Solutions builds websites, custom software, web applications and digital tools for businesses in Zimbabwe and beyond.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <ParallaxHero />
      <ApproachBanner />
      <section className="section solutions-section">
        <div className="container">
          <SectionIntro
            title="What can we solve?"
            text="From a first digital presence to a connected business operation, we build the pieces that make work flow better."
          />
          <SolutionCards />
        </div>
      </section>
      <ClearPathSection />
      <section className="section work-section">
        <div className="container">
          <div className="intro-row">
            <SectionIntro
              title="Solutions we've built."
              text="Practical digital products made to solve a job, not just fill a screen."
            />
            {/* <Link href="/work" className="text-link">
              View all work <b>→</b>
            </Link> */}
          </div>
          <ProjectCards featuredOnly />
        </div>
      </section>
      <PricingPlans />
      <section className="section faq-section">
        <div className="container">
          <SectionIntro
            title="Questions, answered."
            text="Answers to the questions we hear most about our process, pricing, timelines and ongoing support."
          />
          <div className="faq-list">
            {[
              ["How much does a project cost?", "Every project is scoped to the work involved. Our pricing section provides useful starting points, and we will give you a clear proposal before any work begins."],
              ["How long does a project take?", "A focused website can take a few weeks. Larger platforms and custom systems take longer, but we will agree on a clear timeline before we start."],
              ["Can you improve an existing website or system?", "Yes. We can audit what you already have, identify the highest-impact improvements, and make the changes without rebuilding what still works."],
              ["Do you work with clients outside Zimbabwe?", "Yes. We work remotely with teams wherever they are, using clear milestones and regular communication to keep the project moving."],
              ["Do you provide support after launch?", "Yes. We can provide ongoing support, updates and improvements so your product continues to be useful as your business grows."],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <div className="industry-list">
            {[
              "Hospitality & Tourism",
              "Small & Growing Businesses",
              "Professional Services",
              "Startups & Founders",
              "Organisations",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                {item}
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="cta-section">
        <div className="container cta-inner">
          <span className="eyebrow">Let&apos;s begin</span>
          <h2>
            Have a problem
            <br />
            worth <em>solving?</em>
          </h2>
          <p>Tell us what you&apos;re trying to build, improve or automate.</p>
          <div>
            <Link className="button" href="/contact">
              Start a project
            </Link>
            <a
              className="button button-outline"
              href="mailto:hello@mudziyo.co.zw"
            >
              Email us
            </a>
          </div>
        </div>
      </section> */}
      <NewsletterSection />
    </>
  );
}

const projects = [
  ["Invoice Generator", "A simple way for growing businesses to create, send and track polished invoices.", "Business system", "invoice", "/images/projects/invoice-generator.png"],
  ["WhatsApp AI Assistant", "A helpful customer conversation layer, available wherever customers already are.", "AI & automation", "assistant", "/images/projects/whatsapp-ai-assistant.png"],
  ["Booking Platform", "A clearer booking experience designed around real hospitality operations.", "Web application", "booking", "/images/projects/booking-platform.png"],
  ["Business Dashboard", "One focused view of the numbers and activities that move a business forward.", "Dashboard", "dashboard", "/images/projects/business-dashboard.png"],
  ["Custom Web Application", "A purpose-built operational tool that turns a complex workflow into a simple one.", "Custom software", "application"],
  ["E-commerce Platform", "A straightforward online storefront that makes discovering, ordering and managing products easier.", "E-commerce", "commerce"],
];

function ProductVisual({ type }: { type: string }) {
  return <div className={`product-visual ${type}`} aria-hidden="true"><div className="visual-top"><i /><i /><i /></div><div className="visual-body"><div className="visual-side" /><div className="visual-content"><i /><i /><i /><i /></div></div></div>;
}

export function ProjectCards({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const items = featuredOnly ? projects.slice(0, 4) : projects;
  return (
    <div className="project-grid">
      {items.map(([title, desc, category, type, image]) => (
        <article className={`project-card${image ? " project-card-image" : ""}`} key={title}>
          {image ? (
            <div className="product-visual project-image-visual">
              <Image className="project-image" src={image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            </div>
          ) : (
            <ProductVisual type={type} />
          )}
          <div className="project-copy">
            <span className="project-category">{category}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
import Image from "next/image";

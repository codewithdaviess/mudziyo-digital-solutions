export function SectionIntro({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

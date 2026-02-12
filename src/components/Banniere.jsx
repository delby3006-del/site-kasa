import "./styles/banniere.css";
export default function Banniere({ title }) {
  return (
    <section className="banniere" aria-label={title || "Banniere"}>
      <div className="banniere-image" />
      {title ? <h2 className="banniere-titre">{title}</h2> : null}
    </section>
  );
}

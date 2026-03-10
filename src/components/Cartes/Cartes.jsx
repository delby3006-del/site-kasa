import { Link } from "react-router-dom";

function Cartes({ id, title, cover }) {
  // console.log("carte props:", id, title, cover);
  return (
    <Link to={`/logement/${id}`} className="cartes">
      <article>
        <img src={cover} alt={title} className="cartes_img" />
        <div className="degrader_cartes">
          <h2 className="cartes_titre">{title}</h2>
        </div>
      </article>
    </Link>
  );
}
export default Cartes;

import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  console.log("Card props:", id, title, cover);
  return (
    <Link to={"../public/logement/" + id} className="card">
      <article>
        <img src={cover} alt={title} className="card__img" />
        <h2 className="card__title">{title}</h2>
      </article>
    </Link>
  );
}
export default Card;

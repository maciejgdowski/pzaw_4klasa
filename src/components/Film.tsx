/**
 * @param src - image source
 * @param title - film title
 * @param year - film's release date
 * @param rating - film rating (1-10)
 */
interface FilmProps {
  src: string;
  title: string;
  year: number;
  rating: number;
}

function Film({ src, title, year, rating }: FilmProps) {
  console.log(src);
  return (
    <div className="card col-12 col-md-4 m-2 m-md-0" style={{maxWidth: "18rem"}}>
      <img className="cad-img-top" src={src} />
      <h3 className="card-title p-2">
        {title} {rating >= 8 && <span className="badge text-bg-danger">Polecany</span>}
      </h3>
      <div className="card-body">
        <h4>{rating}⭐/10</h4>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default Film;

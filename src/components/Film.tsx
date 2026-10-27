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
  return (
    <div className="card col-12 col-md-4 m-2 m-md-0 p-0" style={{ maxWidth: "18rem" }} onClick={() => console.log(`Wybrano film: ${title}`)}>
      <img className="cad-img-top" src={src} />
      <h3 className="card-title p-2">
        {title} {rating >= 8 && <span className="badge text-bg-danger">Polecany</span>}
      </h3>
      <div className="card-body">
        <h4>{rating}⭐/10</h4>
        <p>{year}</p>
        <p role="butotn" onClick={(e) => {
          e.stopPropagation();
          console.log(`Pokaż szczegóły dla ${title}`)
        }} className="btn btn-outline-primary btn-sm">Pokaż szczegóły</p>
      </div>
    </div>
  );
}

export default Film;

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
  rating: number
}

function Film({ src, title, year, rating }: FilmProps) {
  console.log(src);
  return (
    <div>
      <img src={src} width={250} />
      <h3>{title} | {rating}⭐</h3>
      <p>{year}</p>
    </div>
  );
}

export default Film;

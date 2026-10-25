import Song, { type SongProps } from "./Song";

/**
 * @param cover - album cover art source image
 * @param title - album title
 * @param band - band/artist name
 * @param genre - album genre
 * @param year - album release year
 * @param songs - list of songs on the album, including their durations in seconds
 */
interface MusicProps {
  cover: string;
  title: string;
  band: string;
  genre: string;
  year: number;
  songs?: SongProps[];
}

function Music({ cover, title, band, genre, year, songs }: MusicProps) {
  return (
    <div className="card col-12 col-md-4 m-2 m-md-0" style={{ maxWidth: "18rem" }}>
      <img src={cover} className="card-img" />
      <h3 className="card-title mx-2 text-center">{title}</h3>
      <div className="card-body">
        <span className="text-center">{band}</span>
        <h5>
          {genre} | {year}
        </h5>
      </div>
      {songs ? (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song.name}>
                  <Song duration={song.duration} name={song.name} />
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span className="alert alert-danger">Brak utworów</span>
        )}
    </div>
  );
}

export default Music;

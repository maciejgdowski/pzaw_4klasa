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
  songs: SongProps[];
}

function Music({ cover, title, band, genre, year, songs }: MusicProps) {
  return (
    <div>
      <img src={cover} width={250} />
      <h3>
        {title} | {band}
      </h3>
      <h5>
        {genre} | {year}
      </h5>
      <h4>Lista utworów</h4>
      <ul>
        {songs.map((song) => (
          <Song key={song.name} duration={song.duration} name={song.name} />
        ))}
      </ul>
    </div>
  );
}


export default Music;
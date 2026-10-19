function App() {
  return (
    <>
      <h1>Filmy</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        <Film src="/The_Matrix.png" title="The Matrix" year={1999} />
        <Film src="/avatar_3.jpg" title="Avatar 3" year={2025} />
        <Film src="/minecraft_movie.jpg" title="Minecraft Movie" year={2025} />
      </div>

      <h1>Książki</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        <Book
          src="/harrypotter_kamienfilozoficzny.jpg"
          title="Harry Potter i kamień filozoficzny"
          year={1997}
          pages={326}
        />
        <Book
          src="/harrypotter_komnatatajemnic.webp"
          title="Harry Potter i komnata tajemnic"
          year={1998}
          pages={360}
        />
        <Book
          src="/harrypotter_zakonfeniksa.jpg"
          title="Harry Potter i zakon feniksa"
          year={2004}
          pages={960}
        />
      </div>

      <h1>Muzyka</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        <Music
          cover="/Graduation_(album).jpg"
          title="Graduation"
          band="Kanye West"
          genre="rap"
          year={2007}
          songs={[
            { name: "I Wonder", duration: 243 },
            { name: "Stronger", duration: 312 },
            { name: "Good Life", duration: 207 },
          ]}
        />
        <Music
          cover="/mbdtf.jpg"
          title="My beautiful dark twisted fantasy"
          band="Kanye West"
          genre="rap"
          year={2010}
          songs={[
            { name: "Power", duration: 292 },
            { name: "Runaway", duration: 548 },
            { name: "All of the Lights", duration: 240 },
          ]}
        />
      </div>
    </>
  );
}

/**
 * @param src - image source
 * @param title - film title
 * @param year - film's release date
 */
interface FilmProps {
  src: string;
  title: string;
  year: number;
}

function Film({ src, title, year }: FilmProps) {
  console.log(src);
  return (
    <div>
      <img src={src} width={250} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}

/**
 * @param src - book's cover source image
 * @param title - book title
 * @param year - book release date
 * @param pages - # of pages
 */
interface BookProps {
  src: string;
  title: string;
  year: number;
  pages: number;
}

function Book({ src, title, year, pages }: BookProps) {
  console.log(src);
  return (
    <div>
      <img src={src} width={250} />
      <h3>{title}</h3>
      <p>
        {year} | {pages} stron
      </p>
    </div>
  );
}

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

/**
 * @param name - song name
 * @param duration - song duration in seconds
 */
interface SongProps {
  name: string;
  duration: number;
}

function Song({ name, duration }: SongProps) {
  const minutes = Math.floor(duration / 60);
  const seconds = String(duration % 60).padStart(2, "0");

  return (
    <li>
      {name} | {minutes}:{seconds}
    </li>
  );
}

export default App;

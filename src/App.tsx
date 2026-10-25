import Book from "./components/Book";
import Film from "./components/Film";
import FoldableTitle from "./components/FoldableTitle";
import Music from "./components/Music";

function App() {
  const films = [
    { src: "/The_Matrix.png", title: "The Matrix", year: 1999, rating: 8.8 },
    { src: "/avatar_3.jpg", title: "Avatar 3", year: 2025, rating: 9.1 },
    { src: "/minecraft_movie.jpg", title: "Minecraft Movie", year: 2025, rating: 3.5 },
  ];

  const books = [
    {
      src: "/harrypotter_kamienfilozoficzny.jpg",
      title: "Harry Potter i kamień filozoficzny",
      year: 1997,
      pages: 326,
    },
    {
      src: "/harrypotter_komnatatajemnic.webp",
      title: "Harry Potter i komnata tajemnic",
      year: 1998,
      pages: 360,
    },
    {
      src: "/harrypotter_zakonfeniksa.jpg",
      title: "Harry Potter i zakon feniksa",
      year: 2004,
      pages: 960,
    },
  ];

  const albums = [
    {
      cover: "/Graduation_(album).jpg",
      title: "Graduation",
      band: "Kanye West",
      genre: "rap",
      year: 2007,
      songs: [
        { name: "I Wonder", duration: 243 },
        { name: "Stronger", duration: 312 },
        { name: "Good Life", duration: 207 },
        { name: "Can't Tell Me Nothing", duration: 272 },
      ],
    },
    {
      cover: "/mbdtf.jpg",
      title: "My beautiful dark twisted fantasy",
      band: "Kanye West",
      genre: "rap",
      year: 2010,
      songs: [
        { name: "Power", duration: 292 },
        { name: "Runaway", duration: 548 },
        { name: "All of the Lights", duration: 240 },
      ],
    },
  ];

  films.sort((a, b) => a.title.localeCompare(b.title));
  books.sort((a, b) => a.title.localeCompare(b.title));
  albums.sort((a, b) => a.title.localeCompare(b.title));
  const mostSongsAlbum = albums
    .sort((a, b) => (b.songs?.length ?? 0) - (a.songs?.length ?? 0))
    .at(0);
  console.log("most songs album: ", mostSongsAlbum);
  return (
    <div className="container">
      <section
        id="films"
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <FoldableTitle title="Filmy">
          <div className="d-flex justify-content-evenly w-100 row">
            {films.map((film) => (
              <Film
                key={film.src}
                src={film.src}
                title={film.title}
                year={film.year}
                rating={film.rating}
              />
            ))}
          </div>
        </FoldableTitle>
      </section>

      <section
        id="books"
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <FoldableTitle title="Książki">
          <div className="d-flex justify-content-evenly w-100 row">
            {books.map((book) => (
              <Book
                key={book.src}
                src={book.src}
                title={book.title}
                year={book.year}
                pages={book.pages}
              />
            ))}
          </div>
        </FoldableTitle>
      </section>

      <section
        id="music"
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <FoldableTitle title="Muzyka">
          <div className="d-flex justify-content-evenly w-100 row">
            {albums.map((album) => (
              <Music
                key={album.cover}
                cover={album.cover}
                title={album.title}
                band={album.band}
                genre={album.genre}
                year={album.year}
                songs={album.songs}
              />
            ))}
          </div>
        </FoldableTitle>
      </section>

      <hr style={{ border: "1px solid black", width: "100%" }} />

      <section
        id="other"
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <FoldableTitle title="Filmy wydane po 2010r.">
          <div className="d-flex justify-content-evenly w-100 row">
            {films
              .filter((film) => film.year > 2010)
              .map((film) => (
                <Film
                  key={film.src}
                  src={film.src}
                  title={film.title}
                  year={film.year}
                  rating={film.rating}
                />
              ))}
          </div>
        </FoldableTitle>

        <FoldableTitle title="Książki wg roku wydania">
          <div className="d-flex justify-content-evenly w-100 row">
            {books
              .toSorted((a, b) => b.year - a.year)
              .map((book) => {
                return (
                  <Book
                    key={book.src}
                    src={book.src}
                    title={book.title}
                    year={book.year}
                    pages={book.pages}
                  />
                );
              })}
          </div>
        </FoldableTitle>

        <FoldableTitle title="Album z największą ilością utworów">
          <div className="d-flex justify-content-evenly w-100 row">
            <Music
              band={mostSongsAlbum!.band}
              cover={mostSongsAlbum!.cover}
              genre={mostSongsAlbum!.genre}
              songs={mostSongsAlbum!.songs}
              title={mostSongsAlbum!.title}
              year={mostSongsAlbum!.year}
            />
          </div>
        </FoldableTitle>
      </section>
    </div>
  );
}

export default App;

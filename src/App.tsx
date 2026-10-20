import Book from "./components/Book";
import Film from "./components/Film";
import Music from "./components/Music";

function App() {


  const films = [
    { src: "/The_Matrix.png", title: "The Matrix", year: 1999, rating: 8.8 },
    { src: "/avatar_3.jpg", title: "Avatar 3", year: 2025, rating: 9.1 },
    { src: "/minecraft_movie.jpg", title: "Minecraft Movie", year: 2025, rating: 3.5 },
  ]

  const books = [
    { src: "/harrypotter_kamienfilozoficzny.jpg", title: "Harry Potter i kamień filozoficzny", year: 1997, pages: 326 },
    { src: "/harrypotter_komnatatajemnic.webp", title: "Harry Potter i komnata tajemnic", year: 1998, pages: 360 },
    { src: "/harrypotter_zakonfeniksa.jpg", title: "Harry Potter i zakon feniksa", year: 2004, pages: 960 },
  ]

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
        { name: "Can't Tell Me Nothing", duration: 272 }
      ]
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
      ]
    }
  ];

  films.sort((a, b) => a.title.localeCompare(b.title));
  books.sort((a, b) => a.title.localeCompare(b.title));
  albums.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <>
      <h1>Filmy</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        {
          films.map((film): any => {
            return (
              <Film key={film.src} src={film.src} title={film.title} year={film.year} rating={film.rating} />
            )
          })
        }
      </div>

      <h1>Książki</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        {
          books.map((book): any => {
            return (
              <Book key={book.src} src={book.src} title={book.title} year={book.year} pages={book.pages} />
            )
          })
        }
      </div>

      <h1>Muzyka</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        {
          albums.map((album): any => {
            return (
              <Music
                key={album.cover}
                cover={album.cover}
                title={album.title}
                band={album.band}
                genre={album.genre}
                year={album.year}
                songs={album.songs}
              />
            )
          })
        }
      </div>

      <hr style={{ border: "1px solid black", width: "100%" }} />

      <h1>Filmy wydane po 2010r.</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        {
          films
            .filter(film => film.year > 2010)
            .map(film => (
              <Film
                key={film.src}
                src={film.src}
                title={film.title}
                year={film.year}
                rating={film.rating}
              />
            ))
        }
      </div>

      <h1>Książki wg roku wydania</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        {
          books.toSorted((a, b) => b.year - a.year).map((book): any => {
            return (<Book key={book.src} src={book.src} title={book.title} year={book.year} pages={book.pages} />)
          })
        }
      </div>

        <h1>Album z największą ilością utworów</h1>
        <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
          {
            
          }
        </div>

    </>
  );
}


export default App;
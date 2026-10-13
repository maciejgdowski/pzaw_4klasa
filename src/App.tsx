import type { ReactNode } from "react";

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
        <Book src="/harrypotter_kamienfilozoficzny.jpg" title="Harry Potter i kamień filozoficzny" year={1997} pages={326} />
        <Book src="/harrypotter_komnatatajemnic.webp" title="Harry Potter i komnata tajemnic" year={1998} pages={360} />
        <Book src="/harrypotter_zakonfeniksa.jpg" title="Harry Potter i zakon feniksa" year={2004} pages={960} />
      </div>

      <h1>Muzyka</h1>
      <div style={{ display: "flex", gap: "24px", margin: "12px", justifyContent: "center" }}>
        <Music cover="Graduation_(album).jpg" title="Graduation" band="Kanye West" genre="rap" year={2007}>
          <li>I Wonder</li>
          <li>Stronger</li>
          <li>More...</li>
        </Music>
        <Music cover="mbdtf.jpg" title="My beautiful dark twisted fantasy" band="Kanye West" genre="rap" year={2010}>
          <li>Power</li>
          <li>Runaway</li>
          <li>All Of The Lights</li>
        </Music>
      </div>

    </>
  );
}

function Film({ src, title, year }: { src: string, title: string, year: number }) {
  console.log(src);
  return (
    <div>
      <img src={src} width={250} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}

function Book({ src, title, year, pages }: { src: string, title: string, year: number, pages: number }) {
  console.log(src);
  return (
    <div>
      <img src={src} width={250} />
      <h3>{title}</h3>
      <p>{year} | {pages} stron</p>
    </div>
  );
}

function Music({ cover, title, band, genre, year, children }: { cover: string, title: string, band: string, genre: string, year: number, children?: ReactNode }) {
  return (
    <div>
      <img src={cover} width={250} />
      <h3>{title} | {band}</h3>
      <h5>{genre} | {year}</h5>
      Song List:
      <ul>
        {children}
      </ul>
    </div>
  );
}



export default App

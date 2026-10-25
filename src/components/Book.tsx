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
    return (
        <div className="card col-12 col-md-4 m-2 m-md-0 p-0" style={{width: "18rem"}}>
            <img src={src} className="card-img-top" />
            <h3 className="card-title mx-2">{title} {year < 2000 && <span className="badge text-bg-secondary">Klasyka</span>}</h3>
            <p className="card-body">
                {year} | {pages} stron
            </p>
        </div>
    );
}

export default Book;
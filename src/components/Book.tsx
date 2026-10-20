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
        <div>
            <img src={src} width={250} />
            <h3>{title}</h3>
            <p>
                {year} | {pages} stron
            </p>
        </div>
    );
}

export default Book;
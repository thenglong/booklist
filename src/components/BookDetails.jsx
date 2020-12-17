import "./BookDetails.css";

export default function BookDetails({ book }) {
    return book ? (
        <div className="col h-100 p-0 rounded overflow-hidden ms-4 book-details-container">
            <div className="d-flex h-50 p-3 book-details-header">
                <img
                    className="img-thumbnail h-100"
                    src={process.env.PUBLIC_URL + book.imageLink}
                    alt={book.title}
                />
                <div className="mx-4 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold h1 book-details-title">{book.title}</h3>
                    <hr />
                    <small className="text-muted fw-bold">
                        By <span className="text-dark fst-italic">{book.author}</span>
                    </small>
                    <small className="text-muted fw-bold">
                        Year <span className="text-dark fst-italic">{book.year}</span>
                    </small>
                    <small className="text-muted fw-bold">
                        Language <span className="text-dark fst-italic">{book.language}</span>
                    </small>
                </div>
            </div>
            <div className="p-3 h-50 d-flex flex-column book-details-content">
                <small className="text-muted fw-bold my-2">
                    Country <span className="text-dark fst-italic">{book.country}</span>
                </small>
                <small className="text-muted fw-bold my-2">
                    Total Pages <span className="text-dark fst-italic">{book.pages}</span>
                </small>
                <a className="fst-italic" href={book.link} target="_blank" rel="noreferrer">
                    More details on wikipedia
                </a>
            </div>
        </div>
    ) : (
        <div className="col h-100 p-0 rounded overflow-hidden ms-4 d-flex justify-content-center align-items-center book-details-null">
            <h6 className="h2">Select A Book in the list to see detail.</h6>
        </div>
    );
}

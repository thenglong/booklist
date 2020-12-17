import "./Book.css";

export default function Book({ book, handleBookSelection }) {
    return (
        <>
            <div
                className="list-group-item list-group-item-action book"
                onClick={() => handleBookSelection(book)}
            >
                <div className="d-flex w-100 justify-content-between mb-2">
                    <h5 className="mb-1">{book.title}</h5>
                    <small className="pt-1">
                        By <span className="fw-bold">{book.author}</span>
                    </small>
                </div>
                <small>
                    Language: <span className="fst-italic fs-6">{book.language}</span>
                </small>
            </div>
        </>
    );
}

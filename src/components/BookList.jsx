import Book from "./Book";

import "./BookList.css";

export default function BookList({ books, loading, handleBookSelection }) {
    return (
        <div className="list-group book-list">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <p className="h4">Loading...</p>
                </div>
            ) : (
                books.map(book => (
                    <Book
                        key={`${Math.random().toString(36)}${Math.random().toString(36)}`.substring(
                            13
                        )}
                        book={book}
                        handleBookSelection={handleBookSelection}
                    />
                ))
            )}
        </div>
    );
}

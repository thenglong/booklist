import { useState, useEffect } from "react";

import BookList from "./components/BookList";
import Pagination from "./components/Pagination";
import BookDetials from "./components/BookDetails";
import BooksPerPage from "./components/BooksPerPage";

import { populateData, getCurrentBooks } from "./utils";

import "./App.css";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(20);
    const [totalPages, setTotalPages] = useState(0);
    const [currentBookDetails, setCurrentBookDetails] = useState(null);

    useEffect(() => {
        populateData()
            .then(books => {
                setBooks(getCurrentBooks(books, currentPage, booksPerPage));
                setTotalPages(Math.ceil(books.length / booksPerPage));
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    /**
     * Handle Books Per Page Change
     */
    const handleBooksPerPageChange = async size => {
        setLoading(true);
        setBooksPerPage(size);
        const books = await populateData();
        setBooks(getCurrentBooks(books, 1, size));
        setCurrentPage(1);
        setTotalPages(Math.ceil(books.length / size));
        setLoading(false);
    };

    /**
     * Handle Pagination Number Click Change
     */
    const handlePageNumChange = async pageNum => {
        setLoading(true);
        const books = await populateData();

        setCurrentPage(pageNum);
        //* tofix
        setBooks(getCurrentBooks(books, pageNum, booksPerPage));
        setLoading(false);
    };

    /**
     * Handle Book Click
     */
    const handleBookSelection = async book => {
        setCurrentBookDetails(book);
    };

    return (
        <>
            <div className="container py-5 main-container">
                <div className="row h-100 rounded">
                    <div className="col-5 h-100 px-0">
                        <div className="book-list--header-container">
                            <BooksPerPage
                                booksPerPage={booksPerPage}
                                setBooksPerPage={setBooksPerPage}
                                handleBooksPerPageChange={handleBooksPerPageChange}
                            />

                            <BookList
                                books={books}
                                loading={loading}
                                handleBookSelection={handleBookSelection}
                            />
                        </div>

                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageNumChange={handlePageNumChange}
                        />
                    </div>
                    <BookDetials book={currentBookDetails} />
                </div>
            </div>

            <div className="bg-secondary footer"></div>
        </>
    );
}

import "./BooksPerPage.css";

export default function BooksPerPage({ booksPerPage, handleBooksPerPageChange }) {
    const onChange = async e => {
        handleBooksPerPageChange(e.target.value);
    };
    return (
        <div className="d-flex w-100 justify-content-between align-items-center mb-2 book-list-header">
            <h3 className="text-decoration-underline">Book List</h3>

            <div className="input-group w-auto">
                <span className="input-group-text">Books per pages</span>
                <select
                    className="form-control form-select books-per-pages"
                    value={booksPerPage}
                    onChange={onChange}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select>
            </div>
        </div>
    );
}

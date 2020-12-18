import { getRange } from "../utils/utils";

import "./Pagination.css";

export default function Pagination({ totalPages, handlePageNumChange, currentPage }) {
    console.log("total pages from pagination", totalPages);
    const allPages = getRange(1, totalPages);

    return (
        <div className="d-flex align-items-center justify-content-center pagination-container mt-4">
            <nav className="m-0 p-0">
                <ul className="pagination">
                    {/* render previos page button if it's not the first page */}
                    {currentPage !== 1 && totalPages > 1 ? (
                        <li
                            className="page-item"
                            onClick={() => handlePageNumChange(currentPage - 1)}
                        >
                            <div className="page-link">
                                <span>«</span>
                            </div>
                        </li>
                    ) : null}

                    {/* insert all page into pagination and mart the active one */}
                    {allPages.map(pageNum => {
                        return pageNum === currentPage ? (
                            <li className="page-item active" key={pageNum}>
                                <div className="page-link">{pageNum}</div>
                            </li>
                        ) : (
                            <li
                                className="page-item"
                                key={pageNum}
                                onClick={() => handlePageNumChange(pageNum)}
                            >
                                <div className="page-link">{pageNum}</div>
                            </li>
                        );
                    })}

                    {/* render next page button if it's not the last page */}
                    {currentPage !== totalPages && totalPages > 1 ? (
                        <li
                            className="page-item"
                            onClick={() => handlePageNumChange(currentPage + 1)}
                        >
                            <div className="page-link">
                                <span>»</span>
                            </div>
                        </li>
                    ) : null}
                </ul>
            </nav>
        </div>
    );
}

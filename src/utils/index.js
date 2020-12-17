import axios from "axios";

const ax = axios.create({
    baseURL: process.env.PUBLIC_URL || "http://localhost:3000",
});

export const populateData = async () => await (await ax.get("/books.json")).data;

export const getCurrentBooks = (books, currentPage, booksPerPages) => {
    const indexOfLastBook = currentPage * booksPerPages;
    const indexOfFirstBook = indexOfLastBook - booksPerPages;
    return books.slice(indexOfFirstBook, indexOfLastBook);
};

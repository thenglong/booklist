import axios from "axios";

const session_url = "http://assignment-be.jaksmok.com/api/v1/";
const username = "sampleId";
const password = "Secret";

/**
 * Promise: return books data fetch from api with optional options
 *
 */
const populateData = async (opts = { size: undefined, page: undefined }) => {
    if (opts["page"] && opts["size"])
        return await (
            await axios.get(session_url + "books", {
                auth: { username, password },
                params: { page: opts.page, size: opts.size },
            })
        ).data;
    if (opts["page"])
        return await (
            await axios.get(session_url + "books", {
                auth: { username, password },
                params: { page: opts.page },
            }) 
        ).data;
    else if (opts["size"]) {
        console.log("right condition");
        return await (
            await axios.get(session_url + "books", {
                auth: { username, password },
                params: { size: opts.size },
            })
        ).data;
    } else
        return await (await axios.get(session_url + "books", { auth: { username, password } }))
            .data;
};

/**
 * Promise: return a book data fetch from api by specific id
 *
 */
const getBookById = async BookId => {
    return await (
        await axios.get(session_url + "books/" + BookId, { auth: { username, password } })
    ).data;
};

/**
 * Retern an array that include all numbers in range
 *
 * @param {number} start The starting value
 * @param {number} end The ending value
 * @returns {[]} [...rangeFromStartToEndInclusive]
 */
const getRange = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) result.push(i);
    return result;
};

export { populateData, getBookById, getRange };

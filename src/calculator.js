/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to sum the values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const add = async (...values) => {
    return values.reduce((pv, cv) => { return pv + cv }, 0)
}

/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to subtract values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const subtract = async (...values) => {
    return values.reduce( (pv, cv) => { return pv - cv }, 0 )
}

/**
 * Export out the add, and subtract
 */
export default {
    add, subtract
}


import { isEmpty, isNonEmpty } from "../src/index";

console.assert(isEmpty(null) === true, "null should be empty");
console.assert(isEmpty(undefined) === true, "undefined should be empty");
console.assert(isEmpty("") === true, "empty string should be empty");
console.assert(isEmpty("hello") === false, "non-empty string should not be empty");
console.assert(isEmpty([]) === true, "empty array should be empty");
console.assert(isEmpty([1]) === false, "non-empty array should not be empty");
console.assert(isEmpty({}) === true, "empty object should be empty");
console.assert(isEmpty({ a: 1 }) === false, "non-empty object should not be empty");
console.assert(isNonEmpty("x") === true, "x should be non-empty");
console.assert(isNonEmpty("") === false, "empty string should not be non-empty");
Add tests

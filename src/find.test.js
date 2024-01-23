import { find, isNegative } from "./find.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("find negative ", () => {
    expect(find([10, 50, -20, -10, 100], isNegative)).toEqual(-20);
});


// test("find less than -500 ", () => {
//     expect(find([10, 50, -20, -10, 100])).toEqual(undefined);
// });


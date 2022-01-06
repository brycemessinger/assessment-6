const {shuffleArray} = require('./utils')

const testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    test("Make sure that items have been shuffled", () => {
        let result = shuffleArray(testArr);
        expect(result.join()).not.toEqual(testArr.join());
    })
    test("make sure that shuffleArray returns an array", () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true);
    });

    test('return an array of the same length as the argument sent in', () => {
        expect(shuffleArray(testArr)).toHaveLength(4)
    })
    test('same items as the array passed in', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })
})
import {letterCombinations} from '.../../../code/array/letterCombinations'


describe('test letterCombinations', () => {
  test('letterCombinations', () => {
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
  test('letterCombinations', () => {
    expect(letterCombinations("2")).toEqual(["a","b","c"])
  })
})

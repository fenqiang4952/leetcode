import { countBinarySubstrings, countBinarySubstrings1 } from '../../code/string/countBinarySubstrings'

describe('test countBinarySubstrings', () => {
  test('countBinarySubstrings', () => {
    expect(countBinarySubstrings("00110011")).toBe(6)
  })
  test('countBinarySubstrings', () => {
    expect(countBinarySubstrings("10101")).toBe(4)
  })
  test('countBinarySubstrings1', () => {
    expect(countBinarySubstrings1("00110011")).toBe(6)
  })
  test('countBinarySubstrings1', () => {
    expect(countBinarySubstrings1("10101")).toBe(4)
  })
})
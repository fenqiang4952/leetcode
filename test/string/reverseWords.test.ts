import {reverseWords1, reverseWords2, reverseWords3 } from '.../../../code/string/reverseWords'

describe('test reverseWords1', () => {
  test('reverseWords1', () => {
    expect(reverseWords1("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
  })
  test('reverseWords2', () => {
    expect(reverseWords2("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
  })
  test('reverseWords3', () => {
    expect(reverseWords3("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
  })
})

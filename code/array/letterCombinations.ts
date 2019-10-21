export function letterCombinations(numberStr: string): string[] {
  const map = new Map([[2, 'abc'], [3, 'def'], [4, 'ghi'], [5, 'jkl'], [6, 'mno'], [7, 'pqrs'], [8, 'tuv'], [9, 'wxyz']])
  let arr = numberStr.split('').map(item => {
    const temp = Number(item)
    return map.get(temp)!
  })

  function getCombinations(letterArr: Array<string | string[]>): string[] {
    let result: string[] = []
    for (let i = 0, len = letterArr[0].length; i < len; i++) {
      if (letterArr[1] && letterArr[1].length) {
        for (let j = 0, len1 = letterArr[1].length; j < len1; j++) {
          result.push(letterArr[0][i] + letterArr[1][j])
        }
      } else {
        result.push(letterArr[0][i])
      }
    }

    letterArr.splice(0, 2, result)
    if (letterArr.length > 1) {
      return getCombinations(letterArr)
    } else {
      return result
    }
  }
  return getCombinations(arr)
}
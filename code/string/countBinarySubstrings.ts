export function countBinarySubstrings(str: string): number {
  let arr = str.split('')
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    const n = arr[i]
    let m = 1
    let p = 0
    for (let j = i + 1; j < arr.length; j++) {
      if (n === arr[j]) {
        if (p) {
          break
        }
        m++
      } else {
        p++
        if (m == p) {
          count++
        }
      }
    }
  }
  return count
}

export function countBinarySubstrings1(str: string): number {
  let arr = str.split('').map(item => Number(item))
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let n = 1
    let p = 0
    let sum = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      n++
      sum += arr[j]
      if (arr[j] !== arr[i]) p++
      if ((arr[j] === arr[i] && p)) break
      if ( n / 2 === sum) {
        count++
        break
      }
    }
  }
  return count
}

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
      if (n / 2 === sum) {
        count++
        break
      }
    }
  }
  return count
}

export function countBinarySubstrings2(s: string): number {
  function replace(str: string): string {
    return str.replace(/(01)|(10)/g, (s) => {
      if (s === '01') {
        return '0,1'
      } else {
        return '1,0'
      }
    })
  }
  let str = replace(s)
  if (/(01)|(10)/g.test(str)) {
    str = replace(str)
  }
  let count = 0
  str.split(',').reduce((a,b) => {
    count += Math.min(a.length, b.length)
    return b
  })
  return count
}

export function countBinarySubstrings3(s: string): number {
  let pre = 1, next = 0, n = 0
  for (let i = 0, len = s.length; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      pre++
    } else {
      next = pre
      pre = 1
    }
    if (next >= pre) n++
  }
  return n
}
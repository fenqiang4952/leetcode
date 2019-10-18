export function reverseWords1 (str: string): string {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

export function reverseWords2 (str: string): string {
  return str.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

export function reverseWords3 (str: string): string {
  return str.match(/[\w']+/g)!.map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

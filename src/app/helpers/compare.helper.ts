export function compareBooleans(a: boolean, b: boolean, isAsc: boolean): number {
  return ((a === b)? 0 : a? -1 : 1) * (isAsc ? 1 : -1);
}

export function compareDates(a: Date, b: Date, isAsc: boolean) {
  return (a.getTime() - b.getTime()) * (isAsc ? 1 : -1);
}

export function compareStringsOrNumbers(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
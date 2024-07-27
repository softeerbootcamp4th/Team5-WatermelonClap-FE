export function toPx(value: number | string): string {
  return typeof value === "number" ? `${value}px` : value;
}

export function toS(value: number | string): string {
  return typeof value === "number" ? `${value}s` : value;
}

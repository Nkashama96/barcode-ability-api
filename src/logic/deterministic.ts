export function hashToNumber(hash: string, modulo: number): number {
  return parseInt(hash.slice(0, 16), 16) % modulo;
}

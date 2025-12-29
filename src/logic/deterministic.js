export function hashToNumber(hash, modulo) {
    return parseInt(hash.slice(0, 16), 16) % modulo;
}

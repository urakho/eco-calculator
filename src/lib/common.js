export function shortUID(length = 6) {
    return crypto.randomUUID().replace(/-/g, '').slice(0, length);
}

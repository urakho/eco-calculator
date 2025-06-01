export function shortUID(length = 6) {
    return crypto.randomUUID().replace(/-/g, '').slice(0, length);
}

export const defaultWorld = {
    version: 1,
    name: "My Game"
};

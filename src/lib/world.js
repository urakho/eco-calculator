export default class World {
    constructor(data = {}) {
        this.version = data.version || 1;
        this.name = data.name || "My Game";
        // TODO
    }

    static get prefix() {
        return "world.";
    }

    static key(uid) {
        return `${World.prefix}${uid}`;
    }

    static isKey(key) {
        return key.startsWith(World.prefix);
    }

    static existsAny() {
        for (const key in localStorage) {
            if (World.isKey(key)) return true;
        }
        return false;
    }

    static load(key) {
        const json = localStorage.getItem(key);
        try {
            const data = JSON.parse(json);
            return new World(data);
        } catch (e) {
            console.error("Error parsing world JSON:", e);
            return null;
        }
    }

    save(key) {
        const json = JSON.stringify(this);
        localStorage.setItem(key, json);
    }
}

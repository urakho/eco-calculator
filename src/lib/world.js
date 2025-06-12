export default class World {
    constructor(data = {}) {
        this.version = 2;
        this.name = data.name || "My Game";
        this.server_settings = data.server_settings || {
            craft_resourse_multiplier: 1.0
        };
        this.basic_resources = data.basic_resources || {
            wood: Math.round(6000 / 354),
            dirt: Math.round(5401 / 282), 
            clam: Math.round(6000 / 474) 
        };
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

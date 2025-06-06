<template>
    <Page :visible="show">
        <div class="main-controls">
            <label style="width: fit-content;">World:
                <select v-model="selectedWorldKey" style="width: 25dvw;" name="world-selector">
                    <option v-for="w in worlds" :key="w.key" :value="w.key">
                        {{ w.name }}
                    </option>
                </select>
            </label>
            <div style="flex: 1;"></div>
            <div style="width: fit-content;">
                <button @click="addWorld" style="margin-right: .3rem;">Add</button>
                <button @click="editWorld" style="margin-right: .3rem;">Edit</button>
                <button @click="deleteWorld">Delete</button>
            </div>  
        </div>
        <div class="main-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Labor</th><th>$</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                    <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                    <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                </tbody>
            </table>
        </div>
    </Page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Page from "./Page.vue";
import { shortUID } from "../lib/common";
import World from "../lib/world";

const show = ref(false);
const selectedWorldKey = ref(null);
const worlds = ref([]);

const emit = defineEmits(['world:settings']);

function loadWorlds() {
    worlds.value = [];
    for (let key in localStorage) {
        if (World.isKey(key)) {
            const world = World.load(key);
            if (!world) continue;
            worlds.value.push({ key, name: world.name });            
        }
    }
    if (worlds.value.length > 0 && !selectedWorldKey.value) {
        selectedWorldKey.value = worlds.value[0].key;
    }
}

function createDefaultWorld() {
    const defaultWorld = new World();
    defaultWorld.save(World.key(shortUID()));
}

function addWorld() {
    emit('world:settings', ref(null));
}

function editWorld() {
    emit('world:settings', selectedWorldKey);
}

function deleteWorld() {
    // TODO
}

onMounted(() => {
    if (!World.existsAny()) createDefaultWorld();
    loadWorlds();
});

function open(worldKey = null) {
    if (worldKey !== null) {
        selectedWorldKey.value = worldKey;
    }
    show.value = true;
}

function close() {
    show.value = false
}

defineExpose({ open, close });
</script>

<style scoped>
.main-controls {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.main-container {
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0;
    height: 0;
}
.main-container table {
    width: 100%;
    border-collapse: collapse;
}
.main-container th,
.main-container td {
    padding: 0.5rem;
    text-align: left;
}
.main-container th {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.main-container td {
    border: 1px solid #ccc;
}
.main-container thead {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background: #eee;
}
</style>

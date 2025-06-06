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
                    <tr><td>Eco Farm</td><td>450</td><td>15.0</td></tr>
                    <tr><td>Solar Panel</td><td>980</td><td>40.5</td></tr>
                    <tr><td>Wind Turbine</td><td>1200</td><td>50.0</td></tr>
                    <tr><td>Hydro Plant</td><td>1500</td><td>65.2</td></tr>
                    <tr><td>Biomass Generator</td><td>800</td><td>30.0</td></tr>
                    <tr><td>Greenhouse</td><td>350</td><td>12.0</td></tr>
                    <tr><td>Organic Farm</td><td>500</td><td>18.5</td></tr>
                    <tr><td>Eco House</td><td>2000</td><td>75.0</td></tr>
                    <tr><td>Recycling Plant</td><td>1100</td><td>38.0</td></tr>
                    <tr><td>Forest Mill</td><td>680</td><td>22.4</td></tr>
                    <tr><td>Water Wheel</td><td>600</td><td>20.0</td></tr>
                    <tr><td>Geothermal Station</td><td>1700</td><td>80.0</td></tr>
                    <tr><td>Eco Reactor</td><td>1900</td><td>85.0</td></tr>
                    <tr><td>Sustainable Sawmill</td><td>740</td><td>25.0</td></tr>
                    <tr><td>Eco Brewery</td><td>320</td><td>13.5</td></tr>
                    <tr><td>Windmill Bakery</td><td>580</td><td>21.7</td></tr>
                    <tr><td>Solar Farm</td><td>900</td><td>33.0</td></tr>
                    <tr><td>Green Energy Hub</td><td>1600</td><td>70.0</td></tr>
                    <tr><td>Eco Mine</td><td>1100</td><td>42.1</td></tr>
                    <tr><td>Water Treatment</td><td>870</td><td>29.5</td></tr>
                    <tr><td>Wind Farm</td><td>1430</td><td>55.5</td></tr>
                    <tr><td>Organic Workshop</td><td>540</td><td>19.5</td></tr>
                    <tr><td>Eco Forge</td><td>760</td><td>27.0</td></tr>
                    <tr><td>Solar Refinery</td><td>1280</td><td>47.0</td></tr>
                    <tr><td>Reclaimed Lumber</td><td>670</td><td>23.0</td></tr>
                    <tr><td>Eco Lab</td><td>830</td><td>31.8</td></tr>
                    <tr><td>Herbal Collection</td><td>290</td><td>10.0</td></tr>
                    <tr><td>Eco Market</td><td>450</td><td>15.3</td></tr>
                    <tr><td>Wild Herb Garden</td><td>330</td><td>12.2</td></tr>
                    <tr><td>Fungal Farm</td><td>410</td><td>14.7</td></tr>
                    <tr><td>Eco Brewery II</td><td>350</td><td>12.9</td></tr>
                    <tr><td>Solar Workshop</td><td>620</td><td>24.3</td></tr>
                    <tr><td>Green Alchemy</td><td>550</td><td>20.0</td></tr>
                    <tr><td>Eco Windmill</td><td>770</td><td>28.5</td></tr>
                    <tr><td>Water Purifier</td><td>690</td><td>26.1</td></tr>
                    <tr><td>Organic Mill</td><td>480</td><td>17.8</td></tr>
                    <tr><td>Eco Diner</td><td>520</td><td>18.9</td></tr>
                    <tr><td>Forest Bistro</td><td>500</td><td>17.5</td></tr>
                    <tr><td>Eco Ranch</td><td>850</td><td>32.0</td></tr>
                    <tr><td>Sustainable Quarry</td><td>950</td><td>36.6</td></tr>
                    <tr><td>Eco Laboratory</td><td>780</td><td>29.9</td></tr>
                    <tr><td>Green Workshop</td><td>640</td><td>25.5</td></tr>
                    <tr><td>Eco Dock</td><td>880</td><td>33.3</td></tr>
                    <tr><td>Solar Observatory</td><td>920</td><td>34.7</td></tr>
                    <tr><td>Wind Observatory</td><td>850</td><td>31.2</td></tr>
                    <tr><td>Eco Vineyard</td><td>510</td><td>16.5</td></tr>
                    <tr><td>Organic Creamery</td><td>430</td><td>14.0</td></tr>
                    <tr><td>Eco Conservatory</td><td>600</td><td>22.3</td></tr>
                    <tr><td>Eco Marina</td><td>770</td><td>28.0</td></tr>
                    <tr><td>Eco Observatory</td><td>840</td><td>30.5</td></tr>
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

<template>
    <Page :visible="show">
        <div class="params">
            <table style="width: 100%; border-collapse: collapse;">
                <colgroup>
                    <col style="width: 1%;">
                    <col style="width: 1%;">
                    <col style="width: auto;">
                </colgroup>
                <!-- Section: World Settings -->
                <tr>
                    <td>World name:</td>
                    <td colspan="2">
                        <input
                            v-if="currentWorld"
                            type="text"
                            v-model="currentWorld.world.name"
                            style="width: 100%;"
                        />
                    </td>
                </tr>
                <!-- Section: Server Settings -->
                <tr>
                    <th colspan="3">Server Settings</th>
                </tr>
                <tr>
                    <td>Craft Resource Multiplier:</td>
                    <td>
                        <input
                            type="number"
                            step="0.1"
                            v-model.number="currentWorld.world.server_settings.craft_resourse_multiplier"
                        />
                    </td>
                    <td></td>
                </tr>
                <!-- Section: Basic Resources -->
                <tr>
                    <th colspan="3">Basic Resources</th>
                </tr>
                <tr>
                    <td>Wood:</td>
                    <td>
                        <input
                            type="number"
                            step="0.5"
                            v-model.number="currentWorld.world.basic_resources.wood"
                        />
                    </td>
                    <td>labor</td>
                </tr>
                <tr>
                    <td>Dirt:</td>
                    <td>
                        <input
                            type="number"
                            step="0.5"
                            v-model.number="currentWorld.world.basic_resources.dirt"
                        />
                    </td>
                    <td>labor</td>
                </tr>
                <tr>
                    <td>Clam:</td>
                    <td>
                        <input
                            type="number"
                            step="0.5"
                            v-model.number="currentWorld.world.basic_resources.clam"
                        />
                    </td>
                    <td>labor</td>
                </tr>
            </table>
        </div>
        <div class="controls">
            <button @click="onSave">Save</button>
            <button @click="onCancel">Cancel</button>
        </div>
    </Page>
</template>

<script setup>
import { ref } from 'vue';
import Page from "./Page.vue";
import World from "../lib/world";
import { shortUID } from "../lib/common";

const show = ref(false);
const currentWorld = ref(null);

const emit = defineEmits(['close']);

function open(key) {
    currentWorld.value = key.value ? {
        key: key.value,
        world: World.load(key.value)
    } : { 
        key: World.key(shortUID()),
        world: new World() 
    };
    show.value = true;
}

function onSave() {
    if (currentWorld.value) {
        currentWorld.value.world.save(currentWorld.value.key);
        show.value = false;
        emit('close', currentWorld.value.key);
    }
}

function onCancel() {
    show.value = false;
    emit('close', null);
}

defineExpose({ open });
</script>

<style scoped>
.params {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}
.controls {
    padding-top: 1rem;
    margin: 1rem 0;
    border-top: 1px solid black;
    text-align: center;
    display: flex;
    gap: 0.3rem;
    justify-content: center;
}
.settings-section, .resources-section {
    margin-top: 1rem;
}
h3 {
    margin: 0.5rem 0;
}
table {
    width: 100%;
    border-collapse: collapse;
}
td:first-child {
    white-space: nowrap;
}
th {
    text-align: left;
    padding: 1rem 0 0.5rem 0;
    border-bottom: 1px solid #ccc;
    background-color: #f2f2f2;
}
td {
    padding: 0.2rem 0.5rem;
}
td input {
    width: 5rem;
}
</style>

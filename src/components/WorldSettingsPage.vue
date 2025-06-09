<template>
    <Page :visible="show">
        <div class="params">
            <label style="width: 100%; display: flex; flex-direction: row;">
                World name:
                <input
                    v-if="currentWorld"
                    type="text"
                    style="flex: 1;"
                    v-model="currentWorld.world.name"
                />
            </label>
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
</style>

<template>
    <Page :visible="show">
        <div class="params">
            <label style="width: 100%; display: flex; flex-direction: row;">
                World name:
                <input type="text" style="flex: 1;" />
            </label>
        </div>
        <div class="controls">
            <button>Save</button>
            <button>Cancel</button>
        </div>
    </Page>
</template>

<script setup>
import { ref } from 'vue';
import Page from "./Page.vue";

const show = ref(false);

function open(world) {
    show.value = true;
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
}
</style>

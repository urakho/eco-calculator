<template>
    <main>
        <div style="text-align: center; margin-bottom: 1rem;">
            <h2>{{ caption }}</h2>
        </div>
        <PriceListPage ref="priceListRef" @world:settings="openWorldSettings" />
        <WorldSettingsPage ref="worldSettingsRef" />
    <!--
        <div id="world-delete" class="pages" style="display: none;"> 
            <div class="settings-params" style="text-align: center;">
                <p>Are you sure you want to delete the <span id="world-delete.world-name" style="font-weight: bold;"></span> world?</p>
            </div>
            <div class="settings-controls">
                <button id="world-delete.btn-yes">Yes</button>
                <button onclick="cancelWorld('world-delete')">No</button>
            </div>
        </div>
    -->
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PriceListPage from './PriceListPage.vue';
import WorldSettingsPage from './WorldSettingsPage.vue';

const priceListRef = ref(null);
const worldSettingsRef = ref(null);
const caption = ref('Price List');

onMounted(() => {
    priceListRef.value?.open();
});

function openWorldSettings(world) {
    priceListRef.value?.close();
    caption.value = world.value ? 'Edit World' : 'New World';
    worldSettingsRef.value?.open(world);
}
</script>

<style scoped>
main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    min-height: 0;
}
h2 {
    font-size: x-large;
    color: #004391;
    margin: 0;
}
</style>

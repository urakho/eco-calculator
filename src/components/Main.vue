<template>
    <main>
        <PriceListPage ref="priceListRef" />
    <!--
        <div id="world-settings" class="pages" style="display: none;"> 
            <div class="settings-params">
                <label style="width: 100%; display: flex; flex-direction: row;">
                    World name:
                    <input type="text" id="world-settings.world-name" style="flex: 1;" />
                </label>
            </div>
            <div class="settings-controls">
                <button id="world-settings.btn-save">Save</button>
                <button onclick="cancelWorld('world-settings')">Cancel</button>
            </div>
        </div>
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

const priceListRef = ref(null);

onMounted(() => {
    priceListRef.value?.open();
})
</script>

<style scoped>
main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    min-height: 0;
}
</style>

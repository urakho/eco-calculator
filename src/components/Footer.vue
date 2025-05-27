<template>
    <footer>
        <div class="footer-left">
            <p>
                &copy; 2025 Jura Khozin. All rights reserved. Licensed under the
                <a href="#" onclick="openModal(event, 'license-modal')">MIT License</a>.
            </p>
        </div>
        <div class="footer-right">
            <a href="#" @click.prevent="openDisclaimer()">Disclaimer</a>
            <a href="#" onclick="openModal(event, 'about-modal')">About</a>
        </div>
    </footer>
    <DisclaimerModal ref="disclaimerRef" />
</template>

<script setup>
import { ref } from 'vue';
import DisclaimerModal from "./DisclaimerModal.vue";

const disclaimerRef = ref(null);

function openDisclaimer() {
  disclaimerRef.value?.open();
}
</script>

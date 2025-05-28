<template>
    <footer>
        <div class="footer-left">
            <p>
                &copy; 2025 Jura Khozin. All rights reserved. Licensed under the
                <a href="#" @click.prevent="openLicense()">MIT License</a>.
            </p>
        </div>
        <div class="footer-right">
            <a href="#" @click.prevent="openDisclaimer()">Disclaimer</a>
            <a href="#" @click.prevent="openAbout()">About</a>
        </div>
    </footer>
    <DisclaimerModal ref="disclaimerRef" />
    <AboutModal ref="aboutRef" />
    <LicenseModal ref="licenseRef" />
</template>

<script setup>
import { ref } from 'vue';
import DisclaimerModal from "./DisclaimerModal.vue";
import AboutModal from './AboutModal.vue';
import LicenseModal from './LicenseModal.vue';

const disclaimerRef = ref(null);
const aboutRef = ref(null);
const licenseRef = ref(null);

function openDisclaimer() {
    disclaimerRef.value?.open();
}

function openAbout() {
    aboutRef.value?.open();
}

function openLicense() {
    licenseRef.value?.open();
}
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: rgb(201, 201, 201);
}
.footer-left p {
    text-align: center;
}
.footer-right {
    display: flex;
    flex-direction: column;
    text-align: left;
}
a {
    text-decoration: none;
    color: #0070f3;
}
a:hover {
    text-decoration: underline;
}
</style>

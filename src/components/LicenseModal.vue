<template>
    <Modal :visible="show" close-text="Agree" @click:close="onAgree">
        <div v-html="license" class="modal-body"></div>
    </Modal>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Modal from "./Modal.vue";

const show = ref(false);
const license = ref("");

onMounted(async () => {
    const txt = await fetch("/LICENSE").then(r => r.text());
    license.value = txt;
});

function onAgree() {
    show.value = false;
}

function open() {
    show.value = true;
}

defineExpose({ open });
</script>

<style scoped>
.modal-body {
    white-space: pre-wrap;
    text-align: center;
    font-family: monospace;
    margin-bottom: 1rem;
}
</style>
